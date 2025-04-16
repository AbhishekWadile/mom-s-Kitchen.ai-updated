import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aftnav from "./Aftnav";
import Footer from "./Footer";
import { BiLike } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import {
  AiFillLike,
  AiFillDislike,
  AiTwotoneDislike,
} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

function Category() {
  const { categoryName } = useParams();
  const [likeStatus, setLikeStatus] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: localStorage.getItem("name"),
    title: "",
    category_name: categoryName.replace(":", ""),
    imageFile: null,
    text: "",
    short_desc: "",
    likes: 0,
    dislikes: 0,
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const res = await fetch(`http://localhost:8080/allposts/${categoryName.replace(":", "")}`);
      const data = await res.json();
      setPosts(data.reverse());
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  const handleLike = async (postId, _id) => {
    try {
      console.log("Like API called for postId:", postId, "_id:", _id);
      await fetch(`http://localhost:8080/like/${_id}`, {
        method: 'PUT',
      });
      fetchAllPosts();
      setLikeStatus((prev) => ({
        ...prev,
        [postId]: {
          liked: true,
          disliked: false,
        },
      }));
    } catch (err) {
      console.error("Like API error", err);
    }
  };

  const handleDislike = async (postId, _id) => {
    try {
      await fetch(`http://localhost:8080/dislike/${_id}`, {
        method: 'PUT',
      });
      fetchAllPosts();
      setLikeStatus((prev) => ({
        ...prev,
        [postId]: {
          liked: false,
          disliked: true,
        },
      }));
    } catch (err) {
      console.error("Dislike API error", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("title", formData.title);
    data.append("category_name", formData.category_name);
    data.append("imageFile", formData.imageFile);
    data.append("text", formData.text);
    data.append("short_desc", formData.short_desc);
    data.append("likes", formData.likes);
    data.append("dislikes", formData.dislikes);

    try {
      const response = await fetch("http://localhost:8080/uploadPost", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload Success:", result);
        handleSuccess("Post submitted successfully!");
        setFormData({
          name: localStorage.getItem("name"),
          title: "",
          category_name: categoryName.replace(":", ""),
          imageFile: null,
          text: "",
          short_desc: "",
          likes: 0,
          dislikes: 0,
        });
        fetchAllPosts();
      } else {
        console.error("Upload failed:", response.statusText);
        alert("Failed to submit post.");
      }
    } catch (error) {
      console.error("Error while uploading:", error);
      alert("An error occurred while submitting the post.");
    }
  };

  return (
    <div>
      <Aftnav />
        <h1 className="text-6xl font-[poppins] w-[100%] flex justify-center items-center mt-[5vh] mb-[5vh] font-semibold">
          {categoryName.replace(":", "")}
        </h1>
      <div className="w-full h-auto flex ">
        <div className="w-[95%] h-auto overflow-y-scroll flex flex-col items-center gap-3 justify-center">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="w-[80%] hover:cursor-pointer flex justify-center rounded-md shadow-xl gap-14 p-2 items-center pl-4 h-auto mb-6" onClick={() => navigate(`/blog/${post.category_name}/${post._id}`)}
            >
              <img
                src={`http://localhost:8080/${post.path.replace(/\\/g, "/")}`}
                alt={post.title}
                className="w-[30%] h-[30vh]"
              />
              <div className="w-[60%] font-[poppins] flex flex-col justify-start items-start h-auto p-5 gap-3">
                <div className="w-full flex justify-start font-semibold items-center">
                  <div className="w-[13%] h-[8vh] flex justify-center text-xl items-center border-black border-2 rounded-full">
                    {post.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-6 text-xl">{post.name}</div>
                </div>
                <h1 className="text-2xl font-semibold">{post.title}</h1>
                <p>{post.short_desc}</p>
                <div className="flex gap-5 mt-2 text-2xl cursor-pointer">
                  <div
                    onClick={() => handleLike(idx, post._id)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {likeStatus[idx]?.liked ? (
                      <AiFillLike className="text-green-600" />
                    ) : (
                      <BiLike />
                    )}
                    <span className="text-base">{post.likes}</span>
                  </div>
                  <div
                    onClick={() => handleDislike(idx, post._id)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {likeStatus[idx]?.disliked ? (
                      <AiFillDislike className="text-red-600" />
                    ) : (
                      <AiTwotoneDislike />
                    )}
                    <span className="text-base">{post.dislikes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[40%] h-[100vh] mr-16 p-6 rounded-xl shadow-lg bg-white font-[poppins]">
          <h2 className="text-3xl font-semibold mb-6">Add New Post</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  justify-center items-center gap-5"
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-3 rounded-md outline-none"
            />

            <label className="flex flex-col items-center w-full justify-center border-2 border-dashed border-gray-400 p-10 rounded-md cursor-pointer hover:bg-gray-50">
              <FiPlus className="text-4xl text-gray-500" />
              <span className="text-gray-600 mt-2">Click to upload image</span>
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            <textarea
              name="text"
              placeholder="Write your content here..."
              value={formData.text}
              onChange={handleChange}
              className="border-2 border-gray-300 p-3 rounded-md h-40 w-full resize-none outline-none"
            />

            <input
              type="text"
              name="short_desc"
              placeholder="Short Description"
              value={formData.short_desc}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-3 rounded-md outline-none"
            />

            <button
              type="submit"
              className="bg-green-600 text-white w-[40%] px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Category;
