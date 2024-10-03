from flask import Flask, request, jsonify
import os
import keras_core as keras
import keras_nlp

from keras_core import mixed_precision

# Initialize Flask app
app = Flask(__name__)

# Set up environment variables
os.environ["KERAS_BACKEND"] = "jax"
os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "1.00"

# Set up mixed precision policy
mixed_precision.set_global_policy('mixed_float16')

# Paths
model_path = "exercaisor_50_noearlystop3.weights.h5"

# Load the pre-trained model
print("Loading the model...")
gemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma2_2b_en")
print("Model loaded.")

# Enable LoRA for the model and set the LoRA rank to 8
gemma_lm.backbone.enable_lora(rank=8)

# Limit the input sequence length
gemma_lm.preprocessor.sequence_length = 256

# Set up the sampler
sampler = keras_nlp.samplers.TopKSampler(k=5, seed=2)

# Compile the model with the sampler
gemma_lm.compile(sampler=sampler)

# Load the model weights if they exist
if os.path.exists(model_path):
    gemma_lm.load_weights(model_path)
    print(f"Model weights loaded from {model_path}.")
else:
    print("No saved model weights found. Using default pre-trained weights.")

# Template for the prompt
template = "Instruction:\n{instruction}\n\nResponse:\n{response}"

# Define the function to generate variations
def generate_variation(prompt):
    formatted_prompt = template.format(
        instruction=prompt,
        response=""
    )
    # Generate the output
    output = gemma_lm.generate(formatted_prompt, max_length=256)
    return output

# Define the predict endpoint
@app.route('/predict', methods=['POST'])
def predict():
    # Get the input text from the request
    input_text = request.json.get('input_text', None)
    if input_text is None:
        return jsonify({'error': 'No input text provided.'}), 400

    # Generate response using the model
    try:
        output = generate_variation(input_text)
        return jsonify({'output': output}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
