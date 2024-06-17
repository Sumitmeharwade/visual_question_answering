import React from "react";
import "./Styles/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-section">
          <p>KLE Technological University</p>
          <p>Karnataka, Hubli, Vidyanagar - 580031</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/Sumitmeharwade/visual_question_answering">
          <i className="fab fa-github"></i>
        </a>
        {/* <a href="https://www.linkedin.com/your-profile">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/your-profile">
          <i className="fab fa-twitter"></i>
        </a> */}
      </div>
      {/* <div className="right-section">
        <p>Contact Us:</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
      </div> */}
    </footer>
  );
};

export default Footer;
