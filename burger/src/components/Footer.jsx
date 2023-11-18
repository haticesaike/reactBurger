import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p>All rights reserved </p>
    </div>
  );
};

export default Footer;
