import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [visib1,setVisib1] = useState(false)
  const navigate = useNavigate()

  const handlenav=()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/grocery')
    }else if(token){
      navigate('/invitechef')
    }else{
      navigate('/login')
    }
  }
  return (
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" className='w-full h-[10vh] flex justify-between px-10 items-center font-[Poppins]'>
      <h1 className='text-3xl font-semibold '>Mom'sKitchen.ai</h1>
      <div className='flex h-[6vh] w-[50vw] justify-around items-center'>
        <button className='w-[4.5vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Home</button>
        <button className='w-[5vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Blog</button>
        <button onClick={()=>handlenav()} className='w-[9vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Grocery Store</button>
        <button onClick={()=>handlenav()} className='w-[7vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Invite Chef</button>
        {visib1===false?(          <>
           <Link to="/signup"><button className={`${visib1===false?"visible":"hidden"} w-[7vw] h-[6vh] border-2 border-white rounded-md hover:bg-white hover:text-black duration-300`}>Sign Up</button></Link>
           <Link to="/login"><button className={`${visib1===false?"visible":"hidden"} w-[7vw] h-[6vh] border-2 border-white rounded-md hover:bg-white hover:text-black duration-300`}>Sign In</button></Link>
          </>
        ):(
          <button className={`${visib1===true?"visible":"hidden"} w-[5vh] h-[5vh] border-2 border-white rounded-full`}></button>
        )}
        
        
      </div>
    </div>
  )
}

export default Navbar
