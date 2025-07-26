import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Georgia Stride</h3>
              <p>Adventure Tours & Experiences</p>
            </div>
            <p className="footer-description">
              Discover the authentic beauty of Georgia with our expert-guided
              tours. From cultural experiences to adventurous treks, we create
              unforgettable memories.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#tours">Tours</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tour Categories</h4>
            <ul className="footer-links">
              <li>
                <a href="/tours/cultural">Cultural Tours</a>
              </li>
              <li>
                <a href="/tours/adventure">Adventure Tours</a>
              </li>
              <li>
                <a href="/tours/wine">Wine Tours</a>
              </li>
              <li>
                <a href="/tours/mountain">Mountain Trekking</a>
              </li>
              <li>
                <a href="/tours/city">City Tours</a>
              </li>
              <li>
                <a href="/tours/custom">Custom Tours</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Rustaveli Avenue, Tbilisi, Georgia</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+995 32 123 4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@georgiastride.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Georgia Stride. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
