import React, { useState } from "react";

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-hipster-600 to-forest-700 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="logo">
          <h1 className="m-0 text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Georgia Stride
          </h1>
          <span className="text-sm opacity-90 block -mt-1">
            Adventure Tours & Experiences
          </span>
        </div>

        <nav className={`hidden md:flex gap-8 ${isMenuOpen ? "md:flex" : ""}`}>
          <a
            href="#home"
            className="text-white no-underline font-medium transition-all duration-300 hover:text-hipster-200 hover:-translate-y-0.5 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hipster-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#tours"
            className="text-white no-underline font-medium transition-all duration-300 hover:text-hipster-200 hover:-translate-y-0.5 relative group"
          >
            Tours
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hipster-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-white no-underline font-medium transition-all duration-300 hover:text-hipster-200 hover:-translate-y-0.5 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hipster-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-white no-underline font-medium transition-all duration-300 hover:text-hipster-200 hover:-translate-y-0.5 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hipster-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="bg-white bg-opacity-20 border-none text-white py-2 px-4 rounded-full cursor-pointer relative transition-all duration-300 hover:bg-opacity-30 hover:-translate-y-0.5 flex items-center gap-2"
            onClick={onCartClick}
          >
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold absolute -top-1 -right-1">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden flex flex-col bg-transparent border-none cursor-pointer p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300 rounded-sm"></span>
            <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300 rounded-sm"></span>
            <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300 rounded-sm"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed top-full left-0 right-0 bg-gradient-to-br from-hipster-600 to-forest-700 flex-col p-8 transform transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <a
          href="#home"
          className="text-white no-underline font-medium py-2 block hover:text-hipster-200 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#tours"
          className="text-white no-underline font-medium py-2 block hover:text-hipster-200 transition-all duration-300"
        >
          Tours
        </a>
        <a
          href="#about"
          className="text-white no-underline font-medium py-2 block hover:text-hipster-200 transition-all duration-300"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white no-underline font-medium py-2 block hover:text-hipster-200 transition-all duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
