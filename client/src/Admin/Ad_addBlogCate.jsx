import React, { useState } from "react";
import axios from "axios";
import CategoryList from "../components/CategoryList";

function Ad_addBlogCate() {
  const [formData, setFormData] = useState({
    category_name: "",
    imageFile: null,
  });

  const [uploadStatus, setUploadStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "imageFile" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.category_name || !formData.imageFile) {
      setUploadStatus("Please fill all fields.");
      return;
    }

    const data = new FormData();
    data.append("category_name", formData.category_name);
    data.append("imageFile", formData.imageFile); // Make sure backend is expecting 'file'

    try {
      const response = await axios.post("http://localhost:8080/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", response.data);
      setUploadStatus("Upload successful!");
    } catch (error) {
      console.error("Error uploading:", error);
      setUploadStatus("Upload failed. Try again.");
    }
  };

  return (
    <>
      <div className="p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Category Name</label>
            <input
              type="text"
              name="category_name"
              value={formData.category_name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Image File</label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </form>

        {uploadStatus && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {uploadStatus}
          </p>
        )}
      </div>
      <CategoryList/>
    </>
  );
}

export default Ad_addBlogCate;
