import React, { useState } from "react";
import PayPalPayment from "./PayPalPayment";

const Checkout = ({ cart, onClose, onPaymentSuccess }) => {
  const [paymentStep, setPaymentStep] = useState("summary"); // "summary" or "payment"
  const [selectedTour, setSelectedTour] = useState(null);

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.totalPrice || item.price),
    0
  );

  const handleProceedToPayment = (tour) => {
    setSelectedTour(tour);
    setPaymentStep("payment");
  };

  const handlePaymentSuccess = (details) => {
    // Handle successful payment
    console.log("Payment successful:", details);
    onPaymentSuccess(details, selectedTour);
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  };

  const handlePaymentCancel = () => {
    alert("Payment was cancelled.");
  };

  const handleBackToSummary = () => {
    setPaymentStep("summary");
    setSelectedTour(null);
  };

  if (paymentStep === "payment" && selectedTour) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 m-0">
              Payment
            </h2>
            <button
              className="bg-transparent border-none text-3xl text-gray-600 cursor-pointer p-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="p-6">
            <button
              className="mb-4 flex items-center gap-2 text-hipster-600 hover:text-hipster-700 transition-colors"
              onClick={handleBackToSummary}
            >
              ← Back to Order Summary
            </button>

            <PayPalPayment
              amount={selectedTour.totalPrice || selectedTour.price}
              tourDetails={selectedTour}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              onCancel={handlePaymentCancel}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 m-0">
            Checkout
          </h2>
          <button
            className="bg-transparent border-none text-3xl text-gray-600 cursor-pointer p-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Order Summary
          </h3>

          <div className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-gray-200 rounded-xl"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⏱️ {item.duration}</div>
                    <div>⭐ {item.rating}</div>
                    {item.selectedDate && (
                      <div>📅 {item.selectedDate}</div>
                    )}
                    {item.participants && (
                      <div>👥 {item.participants} participants</div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-hipster-600">
                    ${item.totalPrice || item.price}
                  </div>
                  <button
                    className="mt-2 bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-2 px-4 rounded-lg font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                    onClick={() => handleProceedToPayment(item)}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-6">
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Service Fee:</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 text-lg border-t border-gray-300 pt-2 mt-2">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="text-base">🔒</span>
              <span>Secure payment processing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="text-base">📧</span>
              <span>Instant booking confirmation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="text-base">📞</span>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
