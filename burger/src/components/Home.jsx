import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import background from "../assets/burgerbackground.jpg";

const Home = () => {
  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to="/menu">
        <button className="orderButton">Order Now</button>
      </Link>
    </div>
  );
};

export default Home;
