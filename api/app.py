from fastapi import FastAPI, File, UploadFile, Form
from PIL import Image
import io
import time
from fastapi.middleware.cors import CORSMiddleware
from gradio_client import Client, file

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Client("sumitmeharwade/dandelin-vilt-b32-finetuned-vqa")

@app.post("/predict")
async def predict(image: UploadFile = File(...), question: str = Form(...)):
    start = time.time()
    print("QUESTION = ", question)
    # Read image data from the upload
    contents = await image.read()
    # Create a BytesIO object to hold the image data
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
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
