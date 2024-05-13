from flask import Flask, request, jsonify
from flask_cors import CORS
# from transformers import ViltProcessor, ViltForQuestionAnswering
from PIL import Image
import io
import time
from gradio_client import Client, file

app = Flask(__name__)
CORS(app)



client = Client("sumitmeharwade/dandelin-vilt-b32-finetuned-vqa")


@app.route("/predict", methods=["POST"])
def predict():
    start = time.time()
    # Read image data from the upload
    image = request.files["image"]
    question = request.form["question"]
    print("Question:", question)

    contents = image.read()
    image_data = io.BytesIO(contents)
    # Open the image using PIL
    image_pil = Image.open(image_data)

    # Save the image to a file
    image_pil.save("saved_image.png") 
    print("IMAGE SAVED")

    # Pass the image data to param_0
    result = client.predict(
        param_0=file("saved_image.png"),
        param_1=question,
        api_name="/predict"
    )
    print(result)
    predicted_answer = result['label']
    print("PREDICTED ANSWER = ", predicted_answer)
    print("TIME = ", (time.time() - start))
    return {
        "prediction": predicted_answer
    }

if __name__ == "__main__":
    app.run(host="localhost", port=8000)
