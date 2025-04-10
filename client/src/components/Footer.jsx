import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-[100%] h-[80vh] pt-[7vh] text-3xl flex flex-col justify-center items-center text-white bg-black font-[poppins]'>
      <div className='w-[100%] h-[40vh] mb-[3vh] pt-[8vh] text-3xl flex justify-between items-center text-white bg-black font-[poppins]'>

      <div className='w-[40%] ml-[3vh] h-[60vh] border-black border-2'>
        <div className='w-full h-[10vh] font-semibold text-5xl flex justify-center items-center'><h1>Mom's Kitchen.AI</h1></div>
        <div className='text-[2.5vh] flex justify-center items-center pl-6 pr-6 h-[25vh] leading-5'><p>Mom's Kitchen.AI offers a unique service that brings fresh, wholesale fruits and vegetables directly to your doorstep. Not only do we provide high-quality produce, but we also offer a professional chef to cook in your home, turning these ingredients into delicious, home-cooked meals. It’s the perfect solution for anyone who wants fresh food and expert cooking without the hassle.</p></div>
        <div className="w-full h-[10vh] flex justify-between items-center pl-6 pr-6 text-xl">
          <a href='#'>About us</a>
          <a href='#'>Contact</a>
          <a href='#'>Blogs</a>
          <a href='#'>Reviews</a>
        </div>
      </div>
      <div className='w-[40%] h-[60vh] flex justify-center items-center '>
        <div className='w-full h-[20vh] font-semibold text-xl  flex flex-col justify-around items-center'>
          <h1 className='text-2xl'>Subscribe Our Mom’s Kitchen.AI</h1>
          <div className='w-[80%] h-[10vh] bg-white flex justify-around items-center border-2 border-black rounded-full'>
            <input type="text" placeholder='Enter your email here' className='h-[9vh] pl-4 w-[60%] text-sm rounded-l-full'/>
            <button className='w-[40%] h-[8vh] rounded-full mr-2 bg-black text-sm text-white border-2 '>subscribe</button>
          </div>
        </div>
      </div>
      </div>
      <div className='w-[100%] h-[5vh] pt-[7vh] flex flex-col text-white justify-center items-center'>
        <div className='w-[90%] border-[1px] mb-[3vh] rounded-full'></div>
        <div className='w-[80%] h-[5vh] flex justify-between items-center'>
          <div className='w-[30%] h-[5vh] text-[3vh] flex justify-between items-center'>
          <a href="">Term & Condition</a>
          <a href="">Privacy Policy</a>
          </div>
          <div className='w-[20%] h-[5vh] text-[3vh] flex justify-between items-center'>
            <a href="" className='text-blue-500 text-4xl'><FaFacebook />
            </a>
            <a href="" className='text-4xl text-pink-500'><FaInstagram /></a>
            <a href="" className='text-white-500 text-4xl'><FaXTwitter /></a>
            <a href="" className='text-red-500 text-4xl'><FaYoutube /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
