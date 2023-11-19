import React from "react";
import Data from "../helpers/Data.jsx";
import MenuItem from "../components/MenuItem.jsx";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {Data.map((item, key) => {
          return (
            <MenuItem
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
