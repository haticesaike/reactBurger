import React from "react";
import "../styles/About.css";
import banner from "../assets/banneryeni.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          itaque repudiandae illo dignissimos voluptates blanditiis quis.
          Laborum natus, expedita delectus eligendi provident vitae repellendus
          nobis in eum tenetur voluptas excepturi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Nesciunt itaque repudiandae illo
          dignissimos voluptates blanditiis quis. Laborum natus, expedita
          delectus eligendi provident vitae repellendus nobis in eum tenetur
          voluptas excepturi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nesciunt itaque repudiandae illo dignissimos
          voluptates blanditiis quis. Laborum natus, expedita delectus eligendi
          provident vitae repellendus nobis in eum tenetur voluptas excepturi.
        </p>
      </div>
    </div>
  );
};

export default About;
