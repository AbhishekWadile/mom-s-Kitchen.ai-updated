import React, { useEffect, useState } from "react";
import Star from "../components/Star";
import chef from "../images/showchef1.png";
import Aftnav from "../components/Aftnav";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function NonVegChef_info() {
  const [activeTab, setActiveTab] = useState("back");
  const [chef_info, setChef_info] = useState();
  const { chef_Id, chId } = useParams();
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate()
  
 



  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyCommentChange = { ...commentChange };
    copyCommentChange[name] = value;
    setCommentChange(copyCommentChange);
  };
  const newId = chef_Id?.replace(":", "");
  const chIdn = chId?.replace(":", "");
  console.log(newId);

  console.log(newId);
  const [comments, setComments] = useState([
    {
      chef_id: newId,
      chID: chId,
      name: localStorage.getItem("name"),
      comment: " ",
    },
  ]);
  const [commentChange, setCommentChange] = useState({
    chef_id: newId,
    chID: chId,
    name: localStorage.getItem("name"),
    comment: " ",
  });
  const [formData, setFormData] = useState({
    chef_id:newId,
    chID:Number(chId.replace(":","")),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleSubmitForm = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };


  const handleSubmitForm = async(e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;
    if (!name || !email || !phone || !address) {
      alert("Name, email, contact and address are required");
    }
    try {
      const url = `http://localhost:8080/bookchef/book/${newId}/${chIdn}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if(result){
        navigate('/booked')
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [commentsRealTime, setCommentsRealTime] = useState([]);
  const tab = (a, b) => {
    setShowOptions(a);
    setActiveTab(b);
  };
  // const fetchChefInfo = async (newId) => {
  //   console.log("helo")
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/invitechef/oneChefInfo/:${newId}`
  //     );
  //     const result = await response.json();
  //     setChef_info(result);
  //     console.log(chef_info);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {

  //   console.log("SOKET IO",socket);
  // },[]);
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/invitechef/getComments/${newId}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      setComments(Array.isArray(result) ? result : []);
      console.log("Updated Comments:", result);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Call this function inside useEffect
  useEffect(() => {
    if (newId && chIdn) {
      fetchComments();
    }
  }, [newId, chIdn]);

  const postComment = async (e) => {
    e.preventDefault();
    const { name, comment } = commentChange;
    if (!name || !comment) {
      console.log("Name and comment are required");
    }
    try {
      const url = `http://localhost:8080/invitechef/comment/${newId}/${chIdn}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentChange),
      });
      const result = await response.json();
      // setCommentsRealTime((prevComments) => [...prevComments, result]);
      socket.emit("new-comment", result);

      // fetchComments();

      setCommentChange((prev) => ({ ...prev, comment: "" }));

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchChefInfo = async () => {
      console.log("fetchChefInfo function CALLED"); // 🔴 Check if it logs
      try {
        const response = await fetch(
          `http://localhost:8080/invitechef/oneNonvgChefInfo/${newId}/${chIdn}`
        );
        console.log(
          "API request sent to:",
          `http://localhost:8080/invitechef/oneNonvgChefInfo/${newId}/${chIdn}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        // console.log("API Response:", result);
        setChef_info(result);
      } catch (error) {
        console.error("Error fetching chef info:", error);
      }

      try {
        const response = await fetch(
          `http://localhost:8080/invitechef/getComments/${newId}`
        );
        console.log(
          "API request sent to:",
          `http://localhost:8080/invitechef/getCommnets/${newId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        // console.log("API Response:", result);
        setComments(Array.isArray(result) ? result : []);
        console.log("Comments:", comments);
      } catch (error) {
        console.error("Error fetching chef info:", error);
        setComments([]);
      }
    };

    //
    socket.on("new-comment", (comment) => {
      console.log("New comment received:", comment);
    });

    // socket.on("comment", (comment) => {
    //   console.log("Comment received:", comment);
    //   setCommentsRealTime(comment);
    // });
    //
    if (newId && chIdn) {
      fetchChefInfo();
    }
  }, [newId, chIdn]);

  // useEffect(() => {
  //   socket.on("comment", (comment) => {
  //     console.log("Comment received:", comment);
  //     setCommentsRealTime(comment);
  //   });
  // }, []);

  useEffect(() => {
    socket.on("comment", (newComment) => {
      console.log("New comment received:", newComment);

      setCommentsRealTime((prevComments) => [...prevComments, newComment]); // Append new comment
    });

    return () => {
      socket.off("comment"); // Cleanup listener when component unmounts
    };
  }, []);

  // var uiComponent = commentsRealTime.length > 0 ? commentsRealTime : commentChange;

  const allComments = [...commentsRealTime, ...comments]; // Merge existing and real-time comments

  // var uiComponent = Array.isArray(commentsRealTime) && commentsRealTime.length > 0 ? commentsRealTime : [comments];

  return (
    <>
      <Aftnav />
      <div className="h-auto w-[100%] pt-[5vh] flex justify-center align-center">
        <div className="w-[90%]  h-auto rounded-xl shadow-lg flex flex-col justify-around items-center mb-[4vh] bg-white ">
          <div className="w-[90%] h-[90vh] rounded-xl flex justify-around items-center bg-white ">
            <div className="w-[25%] h-auto rounded-xl">
              <img src={chef_info?.Chef_img} alt="" />
            </div>
            <div className="w-[60%] mt-[10vh] h-[70vh] rounded-xl">
              <h1 className="text-[10vh] font-[poppins] font-semibold uppercase">
                {chef_info?.Chef_name}
              </h1>
              <p className="text-[2.4vh] font-[poppins] w-[90%] font-semibold">
                {chef_info?.Chef_description}
              </p>
              <p className="mt-[2vh] font-semibold font-poppins">
                Location:- {chef_info?.Chef_location}
              </p>
              <p className="mt-[1vh] font-semibold font-poppins">
                Time:- {chef_info?.Chef_availability}
              </p>
              <p className="mt-[1vh] font-semibold font-poppins">
                Experience:- {chef_info?.Chef_experience} years
              </p>
              <div className="w-[20%] mt-[4vh] h-[20vh] text-[2vh] flex justify-between">
                <div className="text-[3vh] mr-6">
                  <Star stars={chef_info?.Chef_rating} />
                </div>
                <a href="#" className="text-xl -mt-[1vh]">
                  <span>(</span>
                  {chef_info?.Chef_review}
                  <span>)</span>review
                </a>
              </div>
            </div>
          </div>
          {activeTab === "back" && (
            <>
              <div className="w-[100%]   h-auto rounded-xl flex flex-col justify-around items-center">
                <h1 className="font-[poppins] text-2xl mb-[3vh] font-semibold">
                  Comments
                </h1>
                <div className="w-[100%]  h-auto flex flex-col justify-around items-center">
                  {/* card  */}
                  {allComments && allComments.length > 0 ? (
                    allComments &&
                    allComments.map((comment) => {
                      return (
                        <div
                          key={comment}
                          className="w-[80%] shadow-lg drop-shadow-lg mb-[5vh]  rounded-md pl-[5vh] font-[poppins] h-auto pr-[5vh]"
                        >
                          <div className="w-[40%] mt-[2vh] flex gap-[3vh] items-center h-[10vh]">
                            <div className="w-[16%] border-2 h-[10vh] rounded-full flex justify-center items-center">
                              {comment.name?.charAt(0)}
                            </div>
                            <h1 className="text-black w-auto font-">
                              {comment?.name}
                            </h1>
                          </div>
                          <p className="mt-[3vh] mb-[2vh]">
                            {comment?.comment}
                          </p>
                          <div className="w-[10%] text-2xl flex justify-around items-center h-[6vh]">
                            <button>
                              <BiLike />
                            </button>
                            <button>
                              <BiDislike />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>No comments yet</p>
                  )}
                  {/* card */}
                </div>
              </div>
              <div className="w-[80%] mb-[3vh] h-auto font-[poppins] flex flex-col justify-around items-center">
                <h1 className="text-2xl font-semibold mt-[2vh] mb-[2vh]">
                  Feedback
                </h1>
                <form
                  onSubmit={postComment}
                  className="w-[90%] flex flex-col justify-around items-center"
                >
                  <input
                    type="text"
                    placeholder="write your opinion..."
                    className="w-[100%] outline-none h-[20vh] pl-[3vh] pr-[3vh] shadow-lg rounded-md"
                    value={commentChange.comment}
                    name="comment"
                    onChange={handleChange}
                  />
                  <div className="w-[90%] mt-[5vh] mb-[3vh] flex justify-end pl-[5vh]">
                    <button className="w-[25%] bg-black text-white h-[5vh] rounded-full">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {/* <div className="w-[100%] h-auto flex justify-center mb-[6vh] items-center">
            {['book now for your chef','back','book now'].map((item)=>{
              return(
                <button key={item} className=" w-[50%] h-[9vh] bg-black flex justify-center items-center gap-[5vh] rounded-full text-[3vh] font-[poppins] duration-300 hover:bg-green-600  text-white">{item === 'book now for your chef'?"book now for your chef":<div><button></button></div>}<div className="relative hover:translate-x-5 text-[3vh] duration-300"><FaArrowRight /></div></button>
              )
            })}
            
            
          </div> */}

          {/* form */}
          {activeTab === "book now" && (
            <div className="w-[70%] mx-auto mt-10 flex flex-col gap-[3vh] p-6 bg-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Book Chef</h2>
              <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChangeForm}
                  className="border p-3 rounded-md"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChangeForm}
                  className="border p-3 rounded-md"
                  required
                />

                <input
                  type="phone"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChangeForm}
                  className="border p-3 rounded-md"
                  required
                />

                <textarea
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChangeForm}
                  className="border p-3 rounded-md h-24"
                  required
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black w-[75%] text-xl font-[poppins] h-[9vh] rounded-full text-white p-3 hover:bg-green-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="w-full h-auto flex justify-center mb-[6vh] items-center">
            {!showOptions ? (
              // Default Button
              <button
                className="w-[50%] h-[9vh] bg-black flex justify-center items-center gap-[5vh] rounded-full text-[3vh] font-[poppins] duration-300 hover:bg-green-600 text-white"
                onClick={() => tab(true, "book now")}
              >
                Book Now for Your Chef
                <div className="relative hover:translate-x-5 text-[3vh] duration-300">
                  <FaArrowRight />
                </div>
              </button>
            ) : (
              // Show "Book Now" and "Back" buttons after clicking
              <div className="flex w-[100%] justify-center gap-4">
                <button
                  className="w-[50%] h-[9vh] bg-gray-700 flex justify-center items-center rounded-full text-[3vh] font-[poppins] duration-300 hover:bg-red-600 text-white"
                  onClick={() => tab(false, "back")} // Back button brings back the first button
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NonVegChef_info;
