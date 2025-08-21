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

  // Temporary test function to show success page
  const [testSuccessData, setTestSuccessData] = useState(null);

  const testSuccessPage = () => {
    const testTour = {
      id: 1,
      name: "Tbilisi City Tour",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      duration: "4 hours",
      rating: "4.8",
      price: 89,
      totalPrice: 89,
      selectedDate: "2024-01-15",
      participants: 2,
    };
    const testPaymentDetails = {
      id: "TEST123456789",
      status: "COMPLETED",
    };

    setTestSuccessData({ details: testPaymentDetails, tour: testTour });
    setShowCart(true);
  };

  const paypalOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "Ae...", // Replace with your actual sandbox client ID
    currency: "USD",
    intent: "capture",
    // Add sandbox configuration
    "data-sdk-integration-source": "button-factory",
    // Enable sandbox mode explicitly
    "data-client-token": "abc123xyz==",
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
