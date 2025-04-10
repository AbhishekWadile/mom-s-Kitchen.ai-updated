import React from 'react';

const ConfirmationCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative p-6 w-80 bg-white rounded-lg shadow-lg">
        {/* Icon */}
        <div className="flex items-center justify-center bg-pink-500 w-12 h-12 rounded-full mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM8 15.938V20h8v-4.063C15.125 14.813 13.594 14 12 14c-1.594 0-3.125.813-4 1.938z"
            />
          </svg>
        </div>

        {/* Confirmation Text */}
        <h2 className="text-center text-pink-600 font-bold text-xl">Confirmation</h2>
        <p className="text-center text-gray-500 mb-6">
          Please confirm the following transaction:
        </p>

        {/* Transaction Summary */}
        <div className="text-left mb-6">
          <div className="flex justify-between text-gray-700">
            <span>To:</span>
            <span className="font-semibold">Hype4.academy</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Date:</span>
            <span className="font-semibold">Fri, 29 March, 2024</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between text-gray-700">
            <span>Amount:</span>
            <span className="font-semibold">R419,31</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Fees:</span>
            <span className="font-semibold">R0,69</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between text-pink-600 text-lg font-bold">
            <span>Total:</span>
            <span>R420.00</span>
          </div>
        </div>

        {/* Payment Method */}
        <button className="w-full py-2 mt-4 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600">
          Credit / Debit Card
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCard;
