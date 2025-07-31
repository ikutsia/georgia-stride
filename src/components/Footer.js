import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white py-12 pb-4">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-section">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Georgia Stride
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Adventure Tours & Experiences
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Discover the authentic beauty of Georgia with our expert-guided
              tours. From cultural experiences to adventurous treks, we create
              unforgettable memories.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full text-base transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full text-base transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full text-base transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full text-base transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Tour Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/tours/cultural"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Cultural Tours
                </a>
              </li>
              <li>
                <a
                  href="/tours/adventure"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Adventure Tours
                </a>
              </li>
              <li>
                <a
                  href="/tours/wine"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Wine Tours
                </a>
              </li>
              <li>
                <a
                  href="/tours/mountain"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Mountain Trekking
                </a>
              </li>
              <li>
                <a
                  href="/tours/city"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  City Tours
                </a>
              </li>
              <li>
                <a
                  href="/tours/custom"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Custom Tours
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-yellow-400 text-base">📍</span>
                <span>123 Rustaveli Avenue, Tbilisi, Georgia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-yellow-400 text-base">📞</span>
                <span>+995 32 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-yellow-400 text-base">✉️</span>
                <span>info@georgiastride.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 m-0">
              &copy; 2024 Georgia Stride. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
