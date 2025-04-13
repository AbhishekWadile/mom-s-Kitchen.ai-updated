import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Aftnav from "./Aftnav";
import Footer from "./Footer";
import img from "../images/Blog page/pexels-pelageia-zelenina-58865108-10000000.jpg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

function Category() {
  const { categoryName } = useParams();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    } else {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };
  return (
    <div>
      <Aftnav />
      <div className="w-[100%] h-auto flex justify-center items-center flex-col">
        <h1 className="text-6xl font-[poppins] mt-[5vh] mb-[5vh] font-semibold">{categoryName.replace(":","")}</h1>
        <div className="w-[95%] h-auto flex flex-col items-center gap-3 justify-center">
            {/* posts */}
            <div className="w-[80%] flex justify-center rounded-md shadow-xl gap-20 p-2 items-center h-auto">
                <img src={img} alt="" className="w-[15%] h-[30vh]" />
                <div className="w-[60%] font-[poppins] flex flex-col justify-start items-start h-auto p-5 gap-3">
                    <div className="w-full flex justify-start font-semibold items-center">
                        <div className="w-[8.5%] h-[8vh] flex justify-center text-xl items-center border-black border-2 rounded-full">A</div>
                        <div className="ml-6 text-xl">Abhishek Wadile</div>
                    </div>
                    <h1 className="text-2xl font-semibold">The Ultimate Garden Fresh Salad</h1>
                    <p className="">🌿 A vibrant medley of crisp lettuce, juicy tomatoes, crunchy cucumbers, and colorful bell peppers, tossed in a zesty herb vinaigrette — freshness in every bite!</p>
                    <div className="flex gap-5 mt-2 text-2xl cursor-pointer">
                        <div onClick={handleLike} className="flex items-center gap-1 cursor-pointer">
                            {liked ? (
                                <AiFillLike className="text-green-600" />
                            ) : (
                                <BiLike />
                            )}
                            <span className="text-base">{likeCount}</span>
                        </div>
                        <div  onClick={handleDislike} className="flex items-center gap-1 cursor-pointer">
                            {disliked ? (
                                <AiFillDislike className="text-red-600" />
                            ) : (
                                <AiTwotoneDislike />
                            )}
                            <span className="text-base">{dislikeCount}</span>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
