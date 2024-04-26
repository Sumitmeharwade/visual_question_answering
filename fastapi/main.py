from fastapi import FastAPI

# Create an instance of the FastAPI class
app = FastAPI()

# Define a route for the root URL ("/")
@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
