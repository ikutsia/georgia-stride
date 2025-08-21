import React from "react";

const PaymentSuccess = ({
  tourDetails,
  paymentDetails,
  onClose,
  onContinueShopping,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600 text-lg">Thank you for your booking</p>
          </div>

          {/* Tour Details */}
          <div className="bg-gradient-to-r from-hipster-50 to-forest-50 p-6 rounded-2xl mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={tourDetails.image}
                  alt={tourDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {tourDetails.name}
                </h3>
                <p className="text-gray-600">
                  ⏱️ {tourDetails.duration} • ⭐ {tourDetails.rating}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {tourDetails.selectedDate && (
                <div className="text-left">
                  <span className="text-gray-600">📅 Date:</span>
                  <div className="font-medium">{tourDetails.selectedDate}</div>
                </div>
              )}
              {tourDetails.participants && (
                <div className="text-left">
                  <span className="text-gray-600">👥 Participants:</span>
                  <div className="font-medium">{tourDetails.participants}</div>
                </div>
              )}
              <div className="text-left">
                <span className="text-gray-600">💰 Amount Paid:</span>
                <div className="font-semibold text-hipster-600 text-lg">
                  ${tourDetails.totalPrice || tourDetails.price}
                </div>
              </div>
              <div className="text-left">
                <span className="text-gray-600">🆔 Transaction ID:</span>
                <div className="font-mono text-xs bg-gray-100 p-1 rounded">
                  {paymentDetails?.id?.slice(-8) || "N/A"}
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 p-6 rounded-2xl mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              What's Next?
            </h4>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-lg">📧</span>
                <div>
                  <div className="font-medium text-gray-800">
                    Confirmation Email
                  </div>
                  <div className="text-sm text-gray-600">
                    You'll receive a detailed confirmation email within 5
                    minutes
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-lg">📱</span>
                <div>
                  <div className="font-medium text-gray-800">Tour Details</div>
                  <div className="text-sm text-gray-600">
                    Check your email for meeting point, time, and guide contact
                    info
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-lg">📞</span>
                <div>
                  <div className="font-medium text-gray-800">24/7 Support</div>
                  <div className="text-sm text-gray-600">
                    Need help? Contact us anytime at support@georgiastride.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onContinueShopping}
              className="flex-1 bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-4 px-8 rounded-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Another Tour
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-transparent text-hipster-600 border-2 border-hipster-600 py-4 px-8 rounded-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-hipster-600 hover:text-white"
            >
              Close
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span>🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📧</span>
                <span>Email Confirmation</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📞</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
