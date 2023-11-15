import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/burger.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img className="logoImg" src={Logo} alt="logo" />
        </div>
        <div className="right-side">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
