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
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="TripAdvisor"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75 4.365-9.75 9.75-9.75zm0 3.375c-3.518 0-6.375 2.857-6.375 6.375s2.857 6.375 6.375 6.375 6.375-2.857 6.375-6.375-2.857-6.375-6.375-6.375zm0 2.25c2.276 0 4.125 1.849 4.125 4.125s-1.849 4.125-4.125 4.125-4.125-1.849-4.125-4.125 1.849-4.125 4.125-4.125z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-10 text-white rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
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
              &copy; 2025 Georgia Stride. All rights reserved.
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
