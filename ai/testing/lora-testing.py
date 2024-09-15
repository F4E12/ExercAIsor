import os
import json
import keras
import keras_nlp

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
data = load_data("ai/testing/math_variations_dataset.jsonl")

# Load the pre-trained model
gemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma2_2b_en")
gemma_lm.summary()

# Enable LoRA for the model and set the LoRA rank to 4
gemma_lm.backbone.enable_lora(rank=4)
gemma_lm.summary()

# Limit the input sequence length to control memory usage
gemma_lm.preprocessor.sequence_length = 256

# Use AdamW optimizer
optimizer = keras.optimizers.AdamW(
    learning_rate=5e-5,
    weight_decay=0.01,
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
def fine_tune_model(data, epochs=100):
    gemma_lm.fit(data, epochs=epochs, batch_size=1)
    print("Model fine-tuning complete.")

# Save the trained model
def save_model(path="fine_tuned_gemma_lm.h5"):
    gemma_lm.save_weights(path)
    print(f"Model saved at {path}.")

# Load the model
def load_model(path="fine_tuned_gemma_lm.h5"):
    gemma_lm.load_weights(path)
    print(f"Model loaded from {path}.")

# Run fine-tuning and save the model
if not os.path.exists("fine_tuned_gemma_lm.h5"):
    fine_tune_model(data)
    save_model()

# Load the model if already saved
load_model()

# Function to generate new variations using the fine-tuned model
def generate_variation(prompt):
    sampler = keras_nlp.samplers.TopKSampler(k=5, seed=2)
    gemma_lm.compile(sampler=sampler)
    print(gemma_lm.generate(prompt, max_length=256))

# Example prompt for generating a new variation
prompt = "John sells 3 bananas a day, Nina sells 6 bananas a day. How many bananas can John and Nina sell in 3 days?"
generate_variation(prompt)
