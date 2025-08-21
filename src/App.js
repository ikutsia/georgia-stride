import React, { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedTours from "./components/FeaturedTours";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TourDetail from "./components/TourDetail";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (tour) => {
    setCart([...cart, tour]);
  };

  const removeFromCart = (tourId) => {
    setCart(cart.filter((item) => item.id !== tourId));
  };

  const handlePaymentSuccess = (details, tour) => {
    // You can add additional logic here like:
    // - Sending confirmation emails
    // - Updating database
    // - Logging payment details
    console.log("Payment completed:", { details, tour });
  };

  const paypalOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "test", // Use environment variable or fallback to test
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="App">
        <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />

        {showCart && (
          <Cart
            cart={cart}
            onClose={() => setShowCart(false)}
            onRemove={removeFromCart}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}

        {selectedTour ? (
          <TourDetail
            tour={selectedTour}
            onBack={() => setSelectedTour(null)}
            onAddToCart={addToCart}
          />
        ) : (
          <>
            <Hero />
            <FeaturedTours
              onTourClick={setSelectedTour}
              onAddToCart={addToCart}
            />
            <About />
            <Contact />
          </>
        )}

        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
