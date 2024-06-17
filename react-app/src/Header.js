import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/kle_logo.png";
import "./Styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="logo" className="logo navbar-brand" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn nav-link" onClick={() => navigate("/")}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link" onClick={() => navigate("/about")}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link" onClick={() => navigate("/ContactUs")}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
