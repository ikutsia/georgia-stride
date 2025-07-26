import React from 'react';
import './Footer.css';

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
              Discover the authentic beauty of Georgia with our expert-guided tours. 
              From cultural experiences to adventurous treks, we create unforgettable memories.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tour Categories</h4>
            <ul className="footer-links">
              <li><a href="#">Cultural Tours</a></li>
              <li><a href="#">Adventure Tours</a></li>
              <li><a href="#">Wine Tours</a></li>
              <li><a href="#">Mountain Trekking</a></li>
              <li><a href="#">City Tours</a></li>
              <li><a href="#">Custom Tours</a></li>
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
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 