import React from "react";

const Cart = ({ cart, onClose, onRemove }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.totalPrice || item.price),
    0
  );

  const handleCheckout = () => {
    alert(
      "Thank you for your booking! We will contact you soon to confirm your tour details."
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 m-0">
            Shopping Cart
          </h2>
          <button
            className="bg-transparent border-none text-3xl text-gray-600 cursor-pointer p-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4 opacity-50">🛒</div>
            <h3 className="text-2xl text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-8">
              Start exploring our amazing tours and add them to your cart!
            </p>
            <button
              className="bg-transparent text-hipster-600 border-2 border-hipster-600 py-4 px-8 rounded-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-hipster-600 hover:text-white"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="p-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 py-4 border-b border-gray-200 relative last:border-b-0"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <span className="text-sm text-gray-600">
                        ⏱️ {item.duration}
                      </span>
                      <span className="text-sm text-gray-600">
                        ⭐ {item.rating}
                      </span>
                      {item.selectedDate && (
                        <span className="text-sm text-gray-600">
                          📅 {item.selectedDate}
                        </span>
                      )}
                      {item.participants && (
                        <span className="text-sm text-gray-600">
                          👥 {item.participants} participants
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-600">
                        ${item.price} per person
                      </span>
                      {item.totalPrice && (
                        <span className="font-semibold text-hipster-600">
                          Total: ${item.totalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className="bg-transparent border-none text-xl cursor-pointer p-2 rounded-full transition-all duration-300 self-start hover:bg-red-50 hover:text-red-500"
                    onClick={() => onRemove(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
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

            <div className="p-6 flex gap-4">
              <button
                className="flex-1 bg-transparent text-hipster-600 border-2 border-hipster-600 py-4 px-8 rounded-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-hipster-600 hover:text-white"
                onClick={onClose}
              >
                Continue Shopping
              </button>
              <button
                className="flex-1 bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-4 px-8 rounded-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>

            <div className="p-4 pb-8 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
                <span className="text-base">🔒</span>
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
                <span className="text-base">📧</span>
                <span>Instant booking confirmation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-base">📞</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
