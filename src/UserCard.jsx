import React from "react";

function UseCard() {
      return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">-name-</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> -email-
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> -street-, -city-
      </p>
    </div>
  );
}

export default UseCard;
