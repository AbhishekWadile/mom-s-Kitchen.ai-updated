import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cha() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/chatbot');
    }
  return (
    <div className='h-[50vh] font-[poppins] w-[100%] flex gap-[9vh] flex-col justify-center items-center bg-[#f0f0f0] p-5'>
        <h1 className='text-5xl font-bold uppercase'>Are you ready to chat with AI ?</h1>
        <button className='text-lg bg-black p-[2vh] w-[30%] rounded-full text-white' onClick={()=>{handleClick()}}>Click here to Chat with AI</button>
    </div>
  )
}

export default Cha
