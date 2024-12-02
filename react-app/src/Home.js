import React, { useState, useRef } from "react";
// import Header from "./Header";
import "./Styles/home.css";
import placeholderImage from "./images/image.png";
import { NavLink } from "react-router-dom";
import "./Styles/Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./icons";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [imageSelected, setImageSelected] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const fileInputRef = useRef();

  // image upload handler
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // if the image was correctly uploaded
    reader.onload = (e) => {
      setImageSelected(e.target.result);
      setUploadedImage(file);
    };

    // if the image was selected
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // button click handler
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // predict request handler
  async function handlePredict() {
    // API endpoint for prediction
    const API_ENDPOINT =
      "https://visual-question-answering-api.onrender.com/predict";

    // Append the user's question to the messages
    const userMessage = {
      id: Math.random().toString(36).substr(2, 9),
      text: question,
      sender: "user",
    };
    setMessages([...messages, userMessage]);

    // clear prediction
    const loadingMessage = {
      id: Math.random().toString(36).substr(2, 9),
      text: "...",
      sender: "model",
    };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    // create a FormData object
    const formData = new FormData();

    formData.append("image", uploadedImage);
    formData.append("question", question);

    // send a POST request to the API
    await fetch(API_ENDPOINT, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Update the model's message with the prediction
        setMessages((prevMessages) =>
          prevMessages.map((msg, index) =>
            index === prevMessages.length - 1
              ? { ...msg, text: responseData["prediction"] }
              : msg
          )
        );
      })
      .catch((error) => {
        console.error(error);
        // Update the model's message with an error message
        setMessages((prevMessages) =>
          prevMessages.map((msg, index) =>
            index === prevMessages.length - 1
              ? { ...msg, text: "Error: Unable to get prediction" }
              : msg
          )
        );
      });

    setQuestion("");
  }

  const handlePopupClose = () => setShowPopup(false);

  return (
    <div className="home">
      <NavLink exact to="/" className="title">
        <span>visual_question_answering</span>
        <span className="icon">
          <CodeIcon />
        </span>
      </NavLink>

      {showPopup && (
        <>
          <div className="popup-overlay" onClick={handlePopupClose}></div>
          <div className="popup">
            <p>
              Heads up! This server's on a free instance, so it might take a
              short nap after a while. If this is your first visit, please allow
              up to 50 seconds for it to wake up and greet you. Thanks for your
              patience!
            </p>
            <button className="popup-close" onClick={handlePopupClose}>
              X
            </button>
          </div>
        </>
      )}

      <div className="content">
        <div className="center">
          <div className="image-placeholder">
            <input
              className="image-uploader"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            {imageSelected ? (
              <img
                htmlFor="fileInput"
                className="static-image"
                src={imageSelected}
                onClick={handleImageClick}
                alt="Select photographs"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                htmlFor="fileInput"
                className="static-image"
                src={placeholderImage}
                onClick={handleImageClick}
                alt="aelected photograph"
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <div id="chat">
            <div id="upper">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.sender === "user" ? "user" : "model"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div id="lower">
              <input
                className="askME"
                placeholder="Ask me"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button className="predict-button" onClick={handlePredict}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
