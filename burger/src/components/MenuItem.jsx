import React from "react";
import "../styles/Menu.css";

const MenuItem = ({ image, title, description, price, key }) => {
  return (
    <div className="menuItem">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <h1 className="title">{title}</h1>
      <h6 className="description">{description}</h6>
      <p className="price">{price}$</p>
    </div>
  );
};

export default MenuItem;
