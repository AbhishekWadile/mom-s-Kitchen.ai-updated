import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InviteCardservices() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1622115837997-90c89ae689f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      heading: "Test",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663850685051-ef8c3a8524ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      heading: "100% ",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      heading: "restaurant",
    },
    {
      img: "https://images.unsplash.com/photo-1609639643505-3c158a56de42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      heading: "Train",
    },
    {
      img: "https://images.unsplash.com/photo-1620088694138-0475bc8fef83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      heading: "Chefs",
    },
    // {
    //   img: "https://images.unsplash.com/photo-1636910419722-adc90644cff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    //   heading: "Test like restaurant3",
    // },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true
  };
  return (
    <div className="w-[80%] flex justify-center items-center h-[40vh]">
      <div className=" w-full h-[40vh] ">
        <Slider {...settings}>
        {
            data && data.map((d)=>(
                <div src={d.img} className="w-[40%] flex flex-col rounded-xl h-[40vh]">
                  <img src={d.img} className="w-full brightness-50 h-[40vh]"/>
                  <h1 className="relative left-[21vh] text-3xl text-white w-full h-[40vh] font-semibold -top-[22vh]">{d.heading}</h1>
                </div>
            ))
        }
        </Slider>
      </div>
    </div>
  );
}

export default InviteCardservices;
