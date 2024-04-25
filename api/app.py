from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from transformers import ViltProcessor, ViltForQuestionAnswering
from PIL import Image
import io
# import matplotlib.pyplot as plt
import time
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Load the VILT model and processor
processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
model = ViltForQuestionAnswering.from_pretrained("dandelin/vilt-b32-finetuned-vqa")

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

@app.post("/predict")
async def predict(image: UploadFile = File(...), question: str = Form(...)):
    start = time.time()
    # Read image data from the upload
    print("image = ")
    contents = await image.read()
    image_data = io.BytesIO(contents)
    image = Image.open(image_data)
    # plt.imshow(image)
    # plt.axis('off')  # Turn off axis
    # plt.show()

    print("Question: ",question)



    # Prepare inputs
    encoding = processor(image, question, return_tensors="pt")

    # Forward pass
    
    outputs = model(**encoding)
    logits = outputs.logits
    idx = logits.argmax(-1).item()
    predicted_answer = model.config.id2label[idx]
    print("TIME = ",(time.time() - start))
    print("Predicted answer:", predicted_answer)
    # return JSONResponse(content={"prediction": predicted_answer})
    return {
        "prediction": predicted_answer
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
