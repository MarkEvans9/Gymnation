import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
// import Home from "../Pages/Home/Home";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="NavContainer">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="Links">
        <Link to="/" style={{ borderBottom: "3px solid #FF2625" }}>
          Home
        </Link>

        <a href="#exercises" className="exercise">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
