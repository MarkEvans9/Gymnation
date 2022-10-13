import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <h4>
        Made by <span>Usama Khurshid</span>
      </h4>
    </div>
  );
};

export default Footer;
