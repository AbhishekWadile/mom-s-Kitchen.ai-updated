import React from "react";
import AutoWritter from "./AutoWritter";

function Working2() {
  return (
    <div className="w-full flex justify-center items-center h-[80vh] bg-white">
      <div className="w-[40%] relative left-28 font-semibold text-2xl flex items-center h-[60%]">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus pariatur fuga similique sed delectus quod quo aspernatur architecto repellendus obcaecati.

      </div>
      <div className="flex  relative left-40 w-[60%] justify-center items-center ">
        <div className="w-[65%] relative -left-20 top-36 z-30 h-[20vh] border-[1px] border-gray-600 rounded-lg bg-blurbg backdrop-blur"><AutoWritter/></div>
        <div className="w-[35%] h-[70vh] border-[1px] relative -left-64 border-gray-600 bg-uiai bg-cover rounded-lg"></div>
      </div>
    </div>
  );
}

export default Working2;
