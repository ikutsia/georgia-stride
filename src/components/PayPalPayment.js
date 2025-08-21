import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = ({ amount, onSuccess, onError, onCancel, tourDetails }) => {

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: "USD"
          },
          description: `Tour Booking: ${tourDetails.name}`,
          custom_id: tourDetails.id
        }
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      onSuccess(details);
    });
  };

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Complete Your Payment
        </h3>
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Tour:</span>
            <span className="font-medium">{tourDetails.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold text-lg text-hipster-600">
              ${amount}
            </span>
          </div>
          {tourDetails.selectedDate && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{tourDetails.selectedDate}</span>
            </div>
          )}
        </div>
        
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "pay"
          }}
        />
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            🔒 Secure payment powered by PayPal
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayPalPayment;
