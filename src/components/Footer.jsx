import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column about-us">
          <h3>About Us</h3>
          <p>
            We Are Themez Hub A Team Of Clean, Creative & Professionals Delivering World-Class HTML Templates To Build A Better & Smart Web.
          </p>
          <button className="store-button">
            <FaGooglePlusG /> Google Store
          </button>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>Support</li>
            <li>Contact Us</li>
            <li>How It Works</li>
            <li>Privacy & Security</li>
            <li>Terms of Service</li>
            <li>Communications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>7744 North, New York</p>
          <p>support@example.com</p>
          <p>+91 123 456 789</p>
          <p>www.apusthemes.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
        <div className="footer-column">
          <h3>Subscribe Newsletter</h3>
          <p>
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <input type="email" placeholder="Your email address" className="newsletter-input" />
          <button className="newsletter-button"><FaGooglePlusG /></button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Listing Hub Powered By ApusTheme</p>
      </div>
    </footer>
  );
};

export default Footer;
