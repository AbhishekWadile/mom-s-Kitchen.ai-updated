import React, { useState, useEffect } from "react";
import axios from "axios";

const Pantry = ({ selectedItems, setSelectedItems }) => {
  const [pantryItems, setPantryItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchPantryItems();
  }, []);

  const fetchPantryItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/pantry");
      setPantryItems(response.data);
    } catch (error) {
      console.error("Error fetching pantry items", error);
    }
  };

  const addPantryItem = async () => {
    if (!input) return;
    try {
      const response = await axios.post("http://localhost:8080/api/pantry", {
        name: input,
        category: "Custom",
      });
      setPantryItems([...pantryItems, response.data]);
      setInput("");
    } catch (error) {
      console.error("Error adding pantry item", error);
    }
  };

  const removePantryItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/pantry/${id}`);
      setPantryItems(pantryItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting pantry item", error);
    }
  };

  const toggleSelection = (item) => {
    if (selectedItems.includes(item.name)) {
      setSelectedItems(selectedItems.filter((i) => i !== item.name));
    } else {
      setSelectedItems([...selectedItems, item.name]);
    }
  };

  return (
    <>
    <div className="w-1/3 bg-red-500 text-white p-5 overflow-y-auto">
      <h1 className="text-2xl font-bold">Pantry</h1>
      <p>
        You have <span className="font-bold">{selectedItems.length}</span>{" "}
        ingredients
      </p>

      {/* Input for adding items */}
      <div className="flex mt-4">
        <input
          type="text"
          className="w-full p-2 text-black rounded"
          placeholder="Add ingredient"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addPantryItem}
          className="bg-green-500 p-2 ml-2 rounded"
        >
          +
        </button>
      </div>

      {/* Pantry Items List */}
      <div className="mt-4">
        {pantryItems.map((item) => (
          <div
            key={item._id}
            className={`p-2 bg-gray-100 text-black rounded mb-2 cursor-pointer flex justify-between ${
              selectedItems.includes(item.name) ? "bg-green-300" : ""
            }`}
            onClick={() => toggleSelection(item)}
          >
            {item.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removePantryItem(item._id);
              }}
              className="text-red-500"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Pantry;
