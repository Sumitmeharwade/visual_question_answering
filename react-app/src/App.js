import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import "./styles.css";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <div>
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
