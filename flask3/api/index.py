from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import ViltProcessor, ViltForQuestionAnswering
from PIL import Image
import io
import time

app = Flask(__name__)
CORS(app)

# Load the VILT model and processor
processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
model = ViltForQuestionAnswering.from_pretrained("dandelin/vilt-b32-finetuned-vqa")

@app.route("/predict", methods=["POST"])
def predict():
    start = time.time()
    # Read image data from the upload
    image = request.files["image"]
    question = request.form["question"]
    print("Question:", question)

    contents = image.read()
    image_data = io.BytesIO(contents)
    image = Image.open(image_data)

    # Prepare inputs
    encoding = processor(image, question, return_tensors="pt")

    # Forward pass
    outputs = model(**encoding)
    logits = outputs.logits
    idx = logits.argmax(-1).item()
    predicted_answer = model.config.id2label[idx]
    print("TIME =", (time.time() - start))
    print("Predicted answer:", predicted_answer)
    
    return jsonify({"prediction": predicted_answer})

if __name__ == "__main__":
    app.run(host="localhost", port=8000)
