import React from 'react';
import './Cart.css';

const Cart = ({ cart, onClose, onRemove }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.totalPrice || item.price), 0);

  const handleCheckout = () => {
    alert('Thank you for your booking! We will contact you soon to confirm your tour details.');
    onClose();
  };

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Start exploring our amazing tours and add them to your cart!</p>
            <button className="continue-shopping-btn" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <div className="cart-item-meta">
                      <span className="meta-item">⏱️ {item.duration}</span>
                      <span className="meta-item">⭐ {item.rating}</span>
                      {item.selectedDate && (
                        <span className="meta-item">📅 {item.selectedDate}</span>
                      )}
                      {item.participants && (
                        <span className="meta-item">👥 {item.participants} participants</span>
                      )}
                    </div>
                    
                    <div className="cart-item-price">
                      <span className="price-per-person">${item.price} per person</span>
                      {item.totalPrice && (
                        <span className="total-price">Total: ${item.totalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="summary-row">
                <span>Service Fee:</span>
                <span>$0</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={onClose}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>

            <div className="cart-info">
              <div className="info-item">
                <span className="info-icon">🔒</span>
                <span>Secure payment processing</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <span>Instant booking confirmation</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 