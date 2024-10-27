
# Visual Question Answering (VQA)

This repository implements a Visual Question Answering (VQA) system using a deep learning model to answer questions based on images. The system includes both web and mobile interfaces, with a choice of FastAPI or Flask backends.

## Project Structure

- **`react-app/`**: React front-end for uploading images and asking questions.
- **`fastapi/`** and **`flask3/`**: API server implementations (FastAPI and Flask). Choose and run only one.
- **`android/`**: Android Studio project providing a native mobile app interface for VQA.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sumitmeharwade/visual_question_answering.git
cd visual_question_answering
```

### 2. Install Dependencies

- **Front End**: In `react-app/`, install Node.js dependencies:
  ```bash
  cd react-app
  npm install
  ```
- **Back End**: In either `fastapi/` or `flask3/`, install Python dependencies:
  ```bash
  cd fastapi  # or cd flask3
  pip install -r requirements.txt
  ```

### 3. Run the Server

- **FastAPI**:  
  ```bash
  uvicorn main:app --reload
  ```
- **Flask**:
  ```bash
  python app.py
  ```

### 4. Start the React Front End

In `react-app/`:
```bash
npm start
```

### 5. Run the Android App

Open `android/` in Android Studio and deploy the app to a device or emulator.

## Usage

1. **Web**: Access the React app (usually at `http://localhost:3000`), upload an image, and ask a question.
2. **Android**: Use the Android app to upload an image and query the server.
3. **Response**: Both interfaces send requests to the server, which processes the image and question, returning an answer.

## Notes

- **Configuration**: Adjust API endpoints in React and Android app configs if needed.
- **Model**: Both FastAPI and Flask load the VQA model for inference.

---

This project provides a flexible, multi-platform solution for Visual Question Answering with configurable backend support.
