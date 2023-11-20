import React from "react";
import "../styles/Contact.css";
import banner from "../assets/bannerimg.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" />
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Message</label>
          <textarea placeholder="Enter Message" rows={6}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
