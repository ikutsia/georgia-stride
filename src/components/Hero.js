import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Discover Georgia's Hidden Treasures</h1>
          <p>
            Experience breathtaking landscapes, rich culture, and unforgettable
            adventures with our expert-guided tours
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Unique Tours</span>
            </div>
            <div className="stat">
              <span className="stat-number">5★</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Tours</button>
            <button className="btn btn-secondary">Watch Video</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-header">
              <span className="card-icon">🗺️</span>
              <span className="card-title">Popular Destinations</span>
            </div>
            <div className="card-content">
              <div className="destination-item">
                <span className="destination-name">Tbilisi Old Town</span>
                <span className="destination-price">From $45</span>
              </div>
              <div className="destination-item">
                <span className="destination-name">Kazbegi Mountains</span>
                <span className="destination-price">From $89</span>
              </div>
              <div className="destination-item">
                <span className="destination-name">Wine Region Tour</span>
                <span className="destination-price">From $67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
