import React, { useState } from 'react';

const EmailCollection = ({ onEmailSubmit, onCancel, tourDetails }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setIsValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    onEmailSubmit({ email: email.trim(), name: name.trim() });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value && !isValid) {
      setIsValid(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Almost There!
            </h2>
            <p className="text-gray-600">
              Please provide your email address to receive booking confirmation
            </p>
          </div>

          <div className="mb-4 p-4 bg-gradient-to-r from-hipster-50 to-forest-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={tourDetails.image}
                  alt={tourDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{tourDetails.name}</h3>
                <p className="text-sm text-gray-600">
                  ${tourDetails.totalPrice || tourDetails.price}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-hipster-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-hipster-500 focus:border-transparent transition-all duration-300 ${
                  !isValid ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-transparent text-hipster-600 border-2 border-hipster-600 py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-hipster-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Continue to Payment
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              🔒 Your email will only be used for booking confirmation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCollection;
