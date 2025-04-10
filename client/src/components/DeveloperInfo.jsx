import React from 'react'
import AW from "../images/AbhishekWadile.jpg"
import VB from "../images/VinitBabar.jpg"
import JS from "../images/JassmeenShaikh.jpg"
import PP from "../images/PranjalPatil.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DeveloperInfo() {
    
  const data = [
    {
        img:AW,
        name:"Abhishek Wadile",
        into:"Hi....! I'm Abhishek Wadile, a skilled Full Stack Developer in Mom's Kitchen.ai experienced in managing both front-end and back-end development. Currently, I'm pursuing BE Information Technology. I handles API integrations, designs user interfaces, and manages database operations."
    },
    {
        img:VB,
        name:"Vinit Babar",
        into:"Hi, I'm Vinit Babar, a final-year BE engineering student specializing in UI/UX design. Currently, I'm leading the UI/UX efforts for Moms Kitchen.ai, creating user-focused designs to enhance the platform’s experience and usability."
    },
    {
        img:JS,
        name:"Jassmeen Shaikh",
        into:"I'm Jasmeen Shaikh, BE student and software developer/data scientist at Mom's Kitchen.Ai .I develop AI-driven solutions using React, Node, Python, and Tailwind, fueling MOM's.Ai with data-driven insights."
    },
    {
        img:PP,
        name:"Pranjal Patil",
        into:"My name is Pranjal Patil, a 4th-year Information Technology engineering student. I'm currently working on Moms Kitchen.ai, handling both frontend (React.js) and backend (Node.js) development. My role includes building interfaces, setting up backend functionality, and creating APIs for smooth user experience."
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true
  };
  return (
    <div className='w-[80%] h-[60vh]'>
        <Slider {...settings}>
        {
            data && data.map((d)=>(
                <div className='h-[67vh] shadow-lg font-[poppins] mb-3 w-[30%] rounded-xl'>
                    <div className='h-[35vh] bg-blue-400 rounded-t-xl flex justify-center items-center'>
                        <img src={d.img} alt="" className='h-[30vh] rounded-full' />
                    </div>
                    <div className='flex flex-col justify-center h-[30vh] items-center'>
                        <h1 className='text-[3vh]  font-semibold'>{d.name}</h1>
                        <center><p className='md:text-[2.1vh] mx-5'>{d.into}</p></center>
                    </div>
                </div>
            ))
        }
        </Slider>
      
    </div>
  )
}

export default DeveloperInfo
