import React from 'react';
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebookF, FaDiscord } from 'react-icons/fa';
import "../App.css";  
import image from "../images/Frame 43094.png"
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo">
          <img src={image} alt="EthAi Logo" className="ethai-logo" /> 
        </div>
        <div className="social-icons">
          <FaTelegramPlane className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaFacebookF className="social-icon" />
          <FaDiscord className="social-icon" />
        </div>
      </div>

      <div className="footer-right">
        <h3>“Designed for traders of today, just like you.”</h3>
        <div className="cta-container">
          <input type="email" placeholder="What’s your work email?" className="email-input" />
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
