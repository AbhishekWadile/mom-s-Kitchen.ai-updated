import React from 'react'
import { useNavigate } from 'react-router-dom'

function GetStart() {
    const navigate = useNavigate()
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.12" className='w-full font-[poppins] h-screen flex justify-center items-center bg-getStart bg-cover bg-gray-300'>
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-[80%] gap-6 font-bold h-[100vh] text-[17vh] flex justify-center flex-col items-center'>
        <div className='flex justify-center flex-col  items-center h-[80vh] w-[80%]'><h1 className='flex tracking-tighter flex-col justify-center items-center'><div>Are You</div><div>Ready To Start</div><div>Chat With Ai?</div></h1></div>
        
        <button data-scroll data-scroll-section data-scroll-speed="-.1" onClick={()=>navigate('/signup')} className='w-[20%] h-[7vh] flex items-center rounded-full justify-center text-[3vh] z-[999] bg-black text-white'>Sign up here</button>
      </div>
    </div>
  )
}

export default GetStart
