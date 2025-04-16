import React, { useEffect, useState } from "react";
import Aftnav from "./Aftnav";
import Footer from "./Footer";
import { BiLike } from "react-icons/bi";
import { AiFillLike, AiFillDislike, AiTwotoneDislike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Onepost() {
  const { categoryName, postId } = useParams();
  const [Allcomments, setAllcomments] = useState([]);
  const [likeStatus, setLikeStatus] = useState({
    liked: false,
    disliked: false,
  });

  const [post, setPost] = useState(null);

  const [formData, setFormData] = useState({
    name: localStorage.getItem("name"),
    comment: "",
  });
  const getAllComments = async () => {
    try {
      const res = await fetch(`http://localhost:8080/comments/${postId}`);
      const data = await res.json();
      setAllcomments(data.reverse());
    } catch (error) {
      console.error("Failed to fetch comments", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/comment/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      handleSuccess(result.message);
      setFormData((prev) => ({ ...prev, comment: "" })); // Clear comment after success
      // fetchPost(); // Refresh comments
      getAllComments();
    } catch (err) {
      handleError("Comment API error", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchPost();
    getAllComments();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/getpost/${categoryName.replace(
          ":",
          ""
        )}/${postId}`
      );
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error("Failed to fetch post", error);
    }
  };

  const handleLike = async () => {
    try {
      await fetch(`http://localhost:8080/like/${post._id}`, {
        method: "PUT",
      });
      fetchPost();
      setLikeStatus({ liked: true, disliked: false });
    } catch (err) {
      console.error("Like API error", err);
    }
  };

  const handleDislike = async () => {
    try {
      await fetch(`http://localhost:8080/dislike/${post._id}`, {
        method: "PUT",
      });
      fetchPost();
      setLikeStatus({ liked: false, disliked: true });
    } catch (err) {
      console.error("Dislike API error", err);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return (
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0") +
      " " +
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0") +
      ":" +
      String(date.getSeconds()).padStart(2, "0")
    );
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="font-[poppins] bg-[#f6f6f6]">
      <Aftnav />
      <div className="w-full gap-2 px-4 mt-5 mb-5 flex justify-start">
        <div className="w-[40%] shadow-xl rounded-md flex flex-col justify-start items-center gap-2 ">
          <img
            src={`http://localhost:8080/${post.path.replace(/\\/g, "/")}`}
            alt="post"
            className="w-auto rounded-md mt-[7vh]  h-[50vh]"
          />
          <div className="w-full h-auto rounded-md pl-10 pr-10 pt-6 pb-6">
            <p>{post.text}</p>
          </div>
        </div>
        <div className="w-[60%] h-auto flex flex-col justify-center items-center gap-2 shadow-xl rounded-md">
          <div className="w-full h-[50vh] flex flex-col rounded-md pt-[3vh] ">
            <div className="w-[50%] h-[10vh] flex items-center text-xl pt-4 font-semibold gap-6 pl-6">
              <div className="w-[15%] flex justify-center items-center border-2 border-black h-[9vh] rounded-full">
                {post.name.charAt(0).toUpperCase()}
              </div>
              <div>{post.name}</div>
            </div>
            <h1 className="pl-9 mt-7 text-3xl font-semibold">{post.title}</h1>
            <p className="mt-5 pl-9 pr-6">{post.short_desc}</p>
            <div className="flex gap-5 text-3xl mt-10 cursor-pointer pl-9">
              <div
                onClick={handleLike}
                className="flex items-center gap-1 cursor-pointer"
              >
                {likeStatus.liked ? (
                  <AiFillLike className="text-green-600" />
                ) : (
                  <BiLike />
                )}
                <span className="text-base">{post.likes}</span>
              </div>
              <div
                onClick={handleDislike}
                className="flex items-center gap-1 cursor-pointer"
              >
                {likeStatus.disliked ? (
                  <AiFillDislike className="text-red-600" />
                ) : (
                  <AiTwotoneDislike />
                )}
                <span className="text-base">{post.dislikes}</span>
              </div>
            </div>
            <p className="text-[10px] flex justify-end text-gray-400 pr-10">
              {formatDate(post.timedate)}
            </p>
          </div>

          <div className="w-full flex flex-col items-center h-auto  rounded-md">
            <div className="w-[90%] h-auto shadow-lg drop-shadow-lg mb-[5vh] rounded-md pl-[5vh] font-[poppins]  pr-[5vh]">
              <h1>Add a comment</h1>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center gap-3 items-center"
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="border-2 border-gray-300 w-full p-3 rounded-md outline-none mt-[2vh] mb-[2vh]"
                />
                <button className="bg-black text-white h-[7vh] px-4 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>

            {/* Sample comment - replace with real data from backend if available */}
            {Allcomments.map((item, idx) => (
              <div key={idx} className="w-[90%] shadow-lg drop-shadow-lg mb-[5vh] rounded-md pl-[5vh] font-[poppins] h-auto pr-[5vh]">
                <div className="w-[40%] mt-[2vh] flex gap-[3vh] items-center h-[10vh]">
                  <div className="w-[18.5%] border-2 h-[8vh] border-black rounded-full flex justify-center items-center">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <h1 className="text-black">{item.name}</h1>
                </div>
                <p className="mt-[3vh] mb-[2vh]">{item.comment}</p>
                <div className="text-[10px] flex justify-end text-gray-400 pr-1">{formatDate(item.commenttimedate)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Onepost;
