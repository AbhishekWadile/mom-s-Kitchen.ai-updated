import React from 'react'
// import img1 from "../images/img2.jpg"
import Navbar from './Navbar'
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  const scrollonup=()=>{
    console.log("detecting...")
    window.scroll({top:245, behavior: 'smooth' })
  }
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className={`bg-land-img bg-cover flex flex-col justify-center items-center text-white w-full h-[95vh]`}>
       <Navbar />
       <div className='w-[70vw] h-[80vh] flex justify-center items-center'>
        <div className='w-[50vw] h-[70vh] flex flex-col justify-center items-center'>
            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className='text-6xl flex justify-center items-center font-semibold'>
                Welcomes to our <br /> MomsKitchen.Ai
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className='text-1xl flex justify-center items-center mx-11  font-normal'>a duuhd jshijsbjb ibdbdbwd wd w d wiud w iu fiw bifbi wbi iduiuwduh wibd <br /> w ihw  wdh wduh dw w wdbwd hwudhhud wduiwiud iwidui bdwd uiw dh </p>
            <button onClick={()=>scrollonup()} data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" className='w-[4.8vw] relative top-32 h-[10vh] flex justify-center items-center text-3xl rounded-full border-2 border-white'><FaArrowDown /></button>
        </div>
       </div>
    </div>
  )
}

export default Landing
