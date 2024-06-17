import React from "react";
import "./Styles/contact.css";
import ai from "./images/youngImage.webp";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import github from "./images/github.png";
import rohit from './images/Rohit Photo.jpg'
import shreyas from './images/Photo.jpg'
import sumit from './images/sumit photo.jpg'

const ContactUs = () => {
  return (
    <div className="us">
      <div className="card11">
        <img src={shreyas} alt="Shreyas Airani" />
        <p>Shreyas Airani</p>
        <div className="social-icons-contact1">
          <a
            href="https://www.linkedin.com/in/shreyas-airani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/shreyasairani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/shreyasairani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="card1">
        <img src={sumit} alt="Sumit Meharwade" />
        <p>Sumit Meharwade</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sumit-meharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/sumitmeharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://wa.me/0987654321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/sumitmeharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="card1">
        <img src={rohit} alt="Rohit Biradar Patil" />
        <p>Rohit Biradar Patil</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rohit-biradar-patil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/rohitbiradarpatil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://wa.me/1122334455"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/rohitbiradarpatil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="card1">
        <img src={ai} alt="Tarun Maidur" />
        <p>Tarun Maidur</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/tarun-maidur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/tarunmaidur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://wa.me/6677889900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/tarunmaidur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
