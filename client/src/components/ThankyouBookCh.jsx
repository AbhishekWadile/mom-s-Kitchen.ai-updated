import React from 'react'
import { useNavigate } from 'react-router-dom'

function ThankyouBookCh() {
    const navigate = useNavigate()

    const handleGoToHome = () => {
        navigate('/home')
    }
  return (
    <div className='flex flex-col w-screen items-center justify-center h-screen'>
      <h1 className='text-[5vh] text-[poppins] font-semibold mb-8'>Thank you for booking! Your request has been submitted successfully.</h1>
      <button onClick={()=>handleGoToHome()} className="w-[20%] bg-black text-white h-[6vh] rounded-full text-xl font-[poppins] pt-2 pb-2 flex justify-center items-center">Go To Home</button>
    </div>
  )
}

export default ThankyouBookCh
