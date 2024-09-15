from flask import Flask, jsonify
from flask_cors import CORS
import random
import re
import spacy
import os
import json
import keras
import keras_nlp


# Initialize Flask app
app = Flask(__name__)
CORS(app)

def load_model(path="fine_tuned_gemma_lm.weights.h5"):
    gemma_lm.load_weights(path)
    print(f"Model loaded from {path}.")
    

gemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma2_2b_en")

# Function to generate new variations using the fine-tuned model
template = "Instruction:\n{instruction}\n\nResponse:\n{response}"
def generate_variation(prompt):
    prompt = template.format(
      instruction=prompt,
      response="",
    )
    sampler = keras_nlp.samplers.TopKSampler(k=5, seed=2)
    gemma_lm.compile(sampler=sampler)
    print(gemma_lm.generate(prompt, max_length=256))

# Define the Flask route to handle variations
@app.route('/variation/<string:prompt>', methods=['GET'])
def get_variations(prompt):
    variations = generate_variation(prompt)
    return jsonify(variations)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

# py -3.12 -m  aiAPI 
