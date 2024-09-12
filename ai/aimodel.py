import random
import re
import spacy

# Load spaCy model for Named Entity Recognition (NER)
nlp = spacy.load("en_core_web_sm")

# List of sample names and objects for variation
names = ["Alice", "Bob", "Charlie", "David", "Eve"]
objects = ["apples", "oranges", "bananas", "pears", "grapes"]

def extract_numbers(text):
    # Extract all numbers using regex
    numbers = re.findall(r'\d+', text)
    return numbers

def extract_object(text):
    # Use a simple search to find the object
    found_object = None
    for obj in objects:
        if obj in text:
            found_object = obj
            break
    return found_object

def replace_numbers(text, original_numbers):
    # Replace original numbers with random numbers
    for number in original_numbers:
        random_number = str(random.randint(1, 100))  # Generate a random number
        text = text.replace(number, random_number, 1)
    return text

def replace_names(text):
    # Use spaCy to detect named entities (like names) and replace them
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == "PERSON":  # Detect names
            new_name = random.choice(names)
            text = text.replace(ent.text, new_name, 1)
    return text

def replace_object(text, original_object):
    # Replace the object with a new one, but use the same object in the entire sentence
    new_object = random.choice(objects)
    text = re.sub(r'\b' + original_object + r'\b', new_object, text)
    return text

def generate_variations(example_text, num_variations=5):
    variations = []
    
    # Extract numbers and object from the original text
    original_numbers = extract_numbers(example_text)
    original_object = extract_object(example_text)
    
    for _ in range(num_variations):
        # Create a variation by replacing numbers, names, and keeping the same object throughout the sentence
        variation = replace_numbers(example_text, original_numbers)
        variation = replace_names(variation)
        variation = replace_object(variation, original_object)
        variations.append(variation)
    
    return variations

# Example input exercise
input_text = "John has 10 apples, and Mary has 5 apples. How many apples do they have together?"

# Generate variations
generated_variations = generate_variations(input_text)

# Print variations
for i, variation in enumerate(generated_variations, 1):
    print(f"Variation {i}: {variation}")
