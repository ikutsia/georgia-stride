import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Georgia Stride</h2>
            <p className="about-subtitle">Your Gateway to Authentic Georgian Experiences</p>
            
            <div className="about-description">
              <p>
                Founded in 2018, Georgia Stride has been connecting travelers with the authentic beauty 
                and rich culture of Georgia. We believe that the best way to experience a country is 
                through the eyes of locals who know its hidden gems and fascinating stories.
              </p>
              
              <p>
                Our team of passionate guides and travel experts are dedicated to creating unforgettable 
                experiences that go beyond typical tourist attractions. From the cobblestone streets of 
                Tbilisi's Old Town to the majestic peaks of the Caucasus Mountains, we'll show you the 
                real Georgia.
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🌟</div>
                <div className="feature-content">
                  <h4>Expert Local Guides</h4>
                  <p>Certified guides with deep knowledge of Georgian history, culture, and traditions</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🏔️</div>
                <div className="feature-content">
                  <h4>Unique Experiences</h4>
                  <p>Handpicked destinations and activities that showcase the best of Georgia</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Personalized Service</h4>
                  <p>Customized tours tailored to your interests, pace, and travel style</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💎</div>
                <div className="feature-content">
                  <h4>Quality Guaranteed</h4>
                  <p>Premium accommodations, transportation, and experiences for every tour</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Unique Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-grid">
              <div className="image-item large">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Georgian landscape"
                />
              </div>
              <div className="image-item">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Mountain view"
                />
              </div>
              <div className="image-item">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Wine region"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 