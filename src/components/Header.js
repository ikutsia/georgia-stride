import React, { useState } from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Georgia Stride</h1>
          <span>Adventure Tours & Experiences</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#tours" className="nav-link">Tours</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="header-actions">
          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 