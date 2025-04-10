import React, { useEffect, useState } from "react";
import chef from "../images/chef.jpg";
import Star from "./Star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, useNavigate } from "react-router-dom";

function Chefamain_card() {
  const [chefs, setChefs] = useState();
  const navigate = useNavigate();
  // const newchefstring = JSON.stringify(chefs);
  // console.log(newchefstring);
  // console.log(typeof chefs);

  const fetchChefs = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/invitechef/getAllChefs"
      );
      const result = await response.json();
      setChefs(result);
      // console.log(chefs);
    } catch (error) {
      console.log(error);
    }
  };
  const navg =(index) =>{
    navigate(`/invitechef/chefinfo/:${chefs[index]._id}/:${chefs[index].Chef_id}`)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };
  useEffect(() => {
    fetchChefs();
  }, []);
  return (
    <div className="w-full">
      <Slider {...settings}>
        {chefs &&
          chefs.map((item, index) => (
            <div key={index} >
              <div className="w-[80%] mt-5 rounded-3xl h-auto shadow-lg flex justify-center items-center p-3">
                <div className="flex gap-3 flex-col justify-center items-center">
                  <img src={item.Chef_img} alt="" className="rounded-xl" />
                  <h1>{item.Chef_name}</h1>
                  <div className="w-full flex justify-between">
                    <Star stars={item.Chef_rating} />
                    <a href="#">
                      <span>(</span>
                      {item.Chef_review} <span>)</span>review
                    </a>
                  </div>
                  <p>{item.Chef_description}</p>
                  <button  onClick={(e)=>navg(index)} className="bg-black w-[80%] flex justify-center items-center h-[6vh] font-semibold text-white rounded-full">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Chefamain_card;
