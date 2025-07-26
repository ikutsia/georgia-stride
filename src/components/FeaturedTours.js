import React, { useState } from 'react';
import './FeaturedTours.css';

const FeaturedTours = ({ onTourClick, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tours = [
    {
      id: 1,
      name: "Tbilisi Old Town Walking Tour",
      description: "Explore the historic heart of Georgia's capital with our expert guide",
      price: 45,
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "cultural",
      highlights: ["Historic churches", "Traditional architecture", "Local markets", "Wine tasting"]
    },
    {
      id: 2,
      name: "Kazbegi Mountain Adventure",
      description: "Hike through stunning mountain landscapes and visit the iconic Gergeti Trinity Church",
      price: 89,
      duration: "Full day",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "adventure",
      highlights: ["Mountain hiking", "Alpine views", "Historic church", "Local cuisine"]
    },
    {
      id: 3,
      name: "Kakheti Wine Region Tour",
      description: "Discover Georgia's famous wine culture with tastings at traditional wineries",
      price: 67,
      duration: "8 hours",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "wine",
      highlights: ["Wine tastings", "Traditional methods", "Local food", "Scenic vineyards"]
    },
    {
      id: 4,
      name: "Svaneti Valley Trek",
      description: "Multi-day trek through the remote and beautiful Svaneti region",
      price: 245,
      duration: "3 days",
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "adventure",
      highlights: ["Remote villages", "Ancient towers", "Mountain passes", "Local hospitality"]
    },
    {
      id: 5,
      name: "Batumi Coastal Experience",
      description: "Explore the Black Sea coast and modern architecture of Batumi",
      price: 78,
      duration: "6 hours",
      rating: 4.6,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "cultural",
      highlights: ["Coastal views", "Modern architecture", "Botanical garden", "Seafood dining"]
    },
    {
      id: 6,
      name: "Vardzia Cave City",
      description: "Visit the ancient cave monastery complex carved into the mountainside",
      price: 56,
      duration: "5 hours",
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "cultural",
      highlights: ["Ancient caves", "Historic monastery", "Mountain views", "Cultural heritage"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'wine', name: 'Wine Tours' }
  ];

  const filteredTours = selectedCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <section className="featured-tours" id="tours">
      <div className="container">
        <div className="section-header">
          <h2>Featured Tours & Experiences</h2>
          <p>Discover the best of Georgia with our carefully curated tours</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="tours-grid">
          {filteredTours.map(tour => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <img src={tour.image} alt={tour.name} />
                <div className="tour-overlay">
                  <button 
                    className="view-details-btn"
                    onClick={() => onTourClick(tour)}
                  >
                    View Details
                  </button>
                </div>
                <div className="tour-badge">
                  <span className="badge-text">{tour.category}</span>
                </div>
              </div>
              
              <div className="tour-content">
                <div className="tour-header">
                  <h3>{tour.name}</h3>
                  <div className="tour-rating">
                    <span className="stars">{'★'.repeat(Math.floor(tour.rating))}</span>
                    <span className="rating-text">{tour.rating} ({tour.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="tour-description">{tour.description}</p>
                
                <div className="tour-details">
                  <div className="detail-item">
                    <span className="detail-icon">⏱️</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>Georgia</span>
                  </div>
                </div>
                
                <div className="tour-highlights">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                
                <div className="tour-footer">
                  <div className="tour-price">
                    <span className="price-amount">${tour.price}</span>
                    <span className="price-label">per person</span>
                  </div>
                  <button 
                    className="book-now-btn"
                    onClick={() => onAddToCart(tour)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours; 