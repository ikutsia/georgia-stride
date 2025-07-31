import React, { useState } from 'react';

const TourDetail = ({ tour, onBack, onAddToCart }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);

  const handleBooking = () => {
    const bookingDetails = {
      ...tour,
      selectedDate,
      participants,
      totalPrice: tour.price * participants
    };
    onAddToCart(bookingDetails);
    alert('Tour added to cart!');
  };

  return (
    <div className="py-8 mt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 mb-8">
        <button 
          className="bg-transparent border-none text-indigo-500 text-base font-semibold cursor-pointer py-2 transition-colors duration-300 hover:text-purple-600"
          onClick={onBack}
        >
          ← Back to Tours
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-96">
              <img 
                src={tour.image} 
                alt={tour.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded-2xl backdrop-blur-sm">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                  {tour.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {tour.name}
              </h1>
              
              <div className="flex gap-8 mb-6 flex-wrap">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-base">⭐</span>
                  <span>{tour.rating} ({tour.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-base">⏱️</span>
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-base">📍</span>
                  <span>Georgia</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {tour.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Included</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg">✅</span>
                    <span>Professional English-speaking guide</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg">✅</span>
                    <span>Transportation in comfortable vehicle</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg">✅</span>
                    <span>Entrance fees to attractions</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg">✅</span>
                    <span>Traditional Georgian lunch</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg">✅</span>
                    <span>Hotel pickup and drop-off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8 pb-6 border-b border-gray-200">
              <span className="block text-4xl font-bold text-indigo-500">
                ${tour.price}
              </span>
              <span className="text-gray-600 text-sm">per person</span>
            </div>

            <div className="mb-8">
              <div className="mb-6">
                <label className="block font-semibold text-gray-800 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-gray-800 mb-2">Number of Participants</label>
                <div className="flex items-center justify-center gap-4 border-2 border-gray-200 rounded-xl p-2">
                  <button
                    type="button"
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="bg-indigo-500 text-white border-none w-10 h-10 rounded-full text-xl font-bold cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:scale-110"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-gray-800 min-w-8 text-center">
                    {participants}
                  </span>
                  <button
                    type="button"
                    onClick={() => setParticipants(participants + 1)}
                    className="bg-indigo-500 text-white border-none w-10 h-10 rounded-full text-xl font-bold cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:scale-110"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-200 mb-6 font-semibold text-gray-800">
                <span>Total Price:</span>
                <span className="text-2xl text-indigo-500">${tour.price * participants}</span>
              </div>

              <button
                className={`w-full py-4 px-8 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider ${
                  !selectedDate 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:-translate-y-0.5 hover:shadow-lg'
                }`}
                onClick={handleBooking}
                disabled={!selectedDate}
              >
                Book This Tour
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                <span className="text-base">📅</span>
                <span>Free cancellation up to 24 hours before</span>
              </div>
              <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                <span className="text-base">💳</span>
                <span>Secure payment with instant confirmation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-base">📞</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail; 