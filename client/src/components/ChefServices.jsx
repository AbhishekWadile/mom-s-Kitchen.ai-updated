import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChefServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true
  };
  return (
    <div className='w-[100%] h-[60vh] '>
      <Slider {...settings}>
      <span className='w-[100%] bg-chefServise1 bg-cover border-2 border-black h-[60vh]'>
        <div className='w-[100%] brightness-50 bg-transparent h-[60vh]'></div>
      </span>
      <span className='w-[100%] bg-chefServise2 bg-cover border-2 border-black h-[60vh]'>
        <div className='w-[100%] brightness-50 h-[60vh]'></div>
      </span>
      <span className='w-[100%] bg-chefServise3 bg-cover border-2 border-black h-[60vh]'>
        <div className='w-[100%] brightness-50 h-[60vh]'></div>
      </span>
      </Slider>
    </div>
  )
}

export default ChefServices
