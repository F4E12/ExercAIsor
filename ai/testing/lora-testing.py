model_path = "/kaggle/input/exercaisor-full-code/exercaisor_50_noearlystop3.weights.h5"
dataset_path = "ai/testing/math_variations_dataset50_2.jsonl"
import os
import json
import keras
import keras_nlp
import random

from tensorflow.keras import mixed_precision

mixed_precision.set_global_policy('mixed_float16')

# Set up environment variables (use these as appropriate for your system)
os.environ["KAGGLE_USERNAME"] = "farreltobias"  # replace with your actual username
os.environ["KAGGLE_KEY"] = "dbb375eb54a1babafa80f1466270a1ab"  # replace with your actual key
os.environ["KERAS_BACKEND"] = "jax"
os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "1.00"

# Function to load dataset from JSONL
def load_data(jsonl_file):
    data = []
    with open(jsonl_file) as file:
        for line in file:
            features = json.loads(line)
            # Format the entire example as a single string
            template = "Instruction:\n{instruction}\n\nResponse:\n{response}"
            data.append(template.format(**features))
    return data

# Load the dataset
data = load_data(dataset_path)
random.shuffle(data)

# Load the pre-trained model
gemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma2_2b_en")
gemma_lm.summary()

# Enable LoRA for the model and set the LoRA rank to 4
gemma_lm.backbone.enable_lora(rank=8)
gemma_lm.summary()

# Limit the input sequence length to control memory usage
gemma_lm.preprocessor.sequence_length = 256

# Use AdamW optimizer
optimizer = keras.optimizers.AdamW(
    learning_rate=5e-5,
    weight_decay=0.01,
    clipnorm=1.0
)
# Exclude layernorm and bias terms from decay
optimizer.exclude_from_weight_decay(var_names=["bias", "scale"])

# Compile the model with Sparse Categorical Crossentropy loss and accuracy metric
gemma_lm.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer=optimizer,
    weighted_metrics=[keras.metrics.SparseCategoricalAccuracy()],
)

# Fine-tune the model for 1 epoch (you can adjust the epoch as needed)
def fine_tune_model(data, epochs=1):
    gemma_lm.fit(data, epochs=epochs, batch_size=1)
    print("Model fine-tuning complete.")

# Save the trained model
def save_model(path="exercaisor_50_noearlystop3.weights.h5"):
    gemma_lm.save_weights(path)
    print(f"Model saved at {path}.")
    
# Load the model
def load_model(path=model_path):
    gemma_lm.load_weights(path)
    print(f"Model loaded from {path}.")

# Run fine-tuning and save the model
if not os.path.exists(model_path):
    fine_tune_model(data)
    save_model()

# Load the model if already saved
load_model()