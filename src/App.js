import React, { useState } from "react";
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

  return (
    <div className="App">
      <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
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
  );
}

export default App;
