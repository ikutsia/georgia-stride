import React, { useState } from 'react';
import './TourDetail.css';

const TourDetail = ({ tour, onBack, onAddToCart }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);

  const handleBooking = () => {
    const bookingDetails = {
      ...tour,
      selectedDate,
      participants,
      totalPrice: tour.price * participants
    };
    onAddToCart(bookingDetails);
    alert('Tour added to cart!');
  };

  return (
    <div className="tour-detail">
      <div className="tour-detail-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Tours
        </button>
      </div>

      <div className="tour-detail-content">
        <div className="tour-detail-main">
          <div className="tour-detail-image">
            <img src={tour.image} alt={tour.name} />
            <div className="tour-detail-badge">
              <span>{tour.category}</span>
            </div>
          </div>

          <div className="tour-detail-info">
            <h1>{tour.name}</h1>
            
            <div className="tour-detail-meta">
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span>{tour.rating} ({tour.reviews} reviews)</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span>{tour.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>Georgia</span>
              </div>
            </div>

            <p className="tour-detail-description">{tour.description}</p>

            <div className="tour-detail-highlights">
              <h3>Highlights</h3>
              <div className="highlights-grid">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-detail-includes">
              <h3>What's Included</h3>
              <div className="includes-list">
                <div className="include-item">
                  <span className="include-icon">✅</span>
                  <span>Professional English-speaking guide</span>
                </div>
                <div className="include-item">
                  <span className="include-icon">✅</span>
                  <span>Transportation in comfortable vehicle</span>
                </div>
                <div className="include-item">
                  <span className="include-icon">✅</span>
                  <span>Entrance fees to attractions</span>
                </div>
                <div className="include-item">
                  <span className="include-icon">✅</span>
                  <span>Traditional Georgian lunch</span>
                </div>
                <div className="include-item">
                  <span className="include-icon">✅</span>
                  <span>Hotel pickup and drop-off</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tour-detail-sidebar">
          <div className="booking-card">
            <div className="booking-price">
              <span className="price-amount">${tour.price}</span>
              <span className="price-label">per person</span>
            </div>

            <div className="booking-form">
              <div className="form-group">
                <label>Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label>Number of Participants</label>
                <div className="participants-selector">
                  <button
                    type="button"
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="participant-btn"
                  >
                    -
                  </button>
                  <span className="participant-count">{participants}</span>
                  <button
                    type="button"
                    onClick={() => setParticipants(participants + 1)}
                    className="participant-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="booking-total">
                <span>Total Price:</span>
                <span className="total-amount">${tour.price * participants}</span>
              </div>

              <button
                className="book-now-btn"
                onClick={handleBooking}
                disabled={!selectedDate}
              >
                Book This Tour
              </button>
            </div>

            <div className="booking-info">
              <div className="info-item">
                <span className="info-icon">📅</span>
                <span>Free cancellation up to 24 hours before</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💳</span>
                <span>Secure payment with instant confirmation</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail; 