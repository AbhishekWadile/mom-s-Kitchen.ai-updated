import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch from backend
    axios.get("http://localhost:8080/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((item) => (
          <div
            key={item._id}
            className="border p-3 rounded shadow-md text-center"
          >
            <img
              src={`http://localhost:8080/${item.path.replace(/\\/g, "/")}`}
              alt={item.category_name}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="font-medium">{item.category_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
