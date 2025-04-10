import React from "react";
import UserIcon from "../images/chef.jpg";
// import Chef from "../assets/images/Chef.png";
import { TiStarFullOutline } from "react-icons/ti";

const Chef_Card = () => {
  //Card data

  const cardList = [
    {
      img: UserIcon,
      title: "Name Of Chef",
      description:
        "Chefs need to be creative, have attention to detail,and have culinary expertise.Culinary expertise includes knife skills, tasting skills, recognizing flavours, and balancing seasoning.",
    },
  ];
  return (
    <>
      <div
        // key={id}
        className=" flex flex-col cursor-pointer shadow-lg border-2 bg-white justify-center py-6 px-10 test-center
               items-center mt-20 rounded-tl-[35px] rounded-br-[35px] shadows-2xl md:min-h-[340px]
               w-full card-item-div max-w-screen-md min-h-[20vh] "
      >
        <img src={UserIcon} alt=" " className="h-20 w-20" />
        <p className="text-[20px] font-semibold uppercase mb-9">{cardList.title}</p>
        <div className="flex relative -left-[10vh] mb-1 col text-yellow-400">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />

          <div className="flex relative -right-[21vh] mb-2  text-black">
            (256)reviews
          </div>
        </div>

        <p className=" flex justify-center text-[15px] font-medium leading-2 w-full mb-2">
          {cardList.description}
        </p>

        <div className="flex justify-center">
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-full ">
            View More
          </button>
        </div>
      </div>
    </>
  );
};
export default Chef_Card;
