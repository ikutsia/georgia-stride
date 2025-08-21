import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourInterest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      tourInterest: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to start your Georgian adventure? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="contact-info">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Let's Plan Your Perfect Trip
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Whether you're looking for a cultural city tour, an adventurous
              mountain trek, or a relaxing wine region visit, our team is here
              to help you create the perfect Georgian experience.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-1">📍</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    123 Rustaveli Avenue
                    <br />
                    Tbilisi, Georgia 0108
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-1">📞</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    +995 32 123 4567
                    <br />
                    +995 599 123 456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-1">✉️</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Email
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    info@georgiastride.com
                    <br />
                    bookings@georgiastride.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-1">🕒</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Business Hours
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="TripAdvisor"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-hipster-600 focus:ring-4 focus:ring-hipster-100 bg-white"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-hipster-600 focus:ring-4 focus:ring-hipster-100 bg-white"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-hipster-600 focus:ring-4 focus:ring-hipster-100 bg-white"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="tourInterest"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Tour Interest
                </label>
                <select
                  id="tourInterest"
                  name="tourInterest"
                  value={formData.tourInterest}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-hipster-600 focus:ring-4 focus:ring-hipster-100 bg-white"
                >
                  <option value="">Select a tour type</option>
                  <option value="cultural">Cultural Tours</option>
                  <option value="adventure">Adventure Tours</option>
                  <option value="wine">Wine Tours</option>
                  <option value="custom">Custom Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-800 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-hipster-600 focus:ring-4 focus:ring-hipster-100 bg-white resize-vertical min-h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-4 px-8 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
