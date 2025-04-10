// components/IngredientItem.jsx
import React from "react";

const IngredientItem = ({ item, isSelected, onSelect }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        isSelected ? "bg-green-400 text-white" : "bg-white text-black"
      } hover:bg-green-300 transition duration-200`}
      onClick={onSelect}
    >
      {item}
    </button>
  );
};

export default IngredientItem;
