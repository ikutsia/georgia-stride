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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full text-xl transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full text-xl transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  📷
                </a>
                                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full text-xl transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1" 
                  aria-label="Twitter"
                >
                  🐦
                </a>
                                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-hipster-600 text-white rounded-full text-xl transition-all duration-300 hover:bg-forest-700 hover:-translate-y-1" 
                  aria-label="YouTube"
                >
                  📺
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
