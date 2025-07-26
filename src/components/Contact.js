import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tourInterest: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      tourInterest: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Ready to start your Georgian adventure? Contact us today!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Plan Your Perfect Trip</h3>
            <p>
              Whether you're looking for a cultural city tour, an adventurous mountain trek, 
              or a relaxing wine region visit, our team is here to help you create the perfect 
              Georgian experience.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>123 Rustaveli Avenue<br />Tbilisi, Georgia 0108</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+995 32 123 4567<br />+995 599 123 456</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@georgiastride.com<br />bookings@georgiastride.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📺</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="tourInterest">Tour Interest</label>
                <select
                  id="tourInterest"
                  name="tourInterest"
                  value={formData.tourInterest}
                  onChange={handleChange}
                >
                  <option value="">Select a tour type</option>
                  <option value="cultural">Cultural Tours</option>
                  <option value="adventure">Adventure Tours</option>
                  <option value="wine">Wine Tours</option>
                  <option value="custom">Custom Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 