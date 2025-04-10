import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminnav(props) {
    const [loggedInUser,setLoggedInUser]=useState('');
    const [GloggedInUser,setGLoggedInUser]=useState('');
   
    const navigate = useNavigate()
    const color = props.color
    useEffect(()=>{
      
        setLoggedInUser(localStorage.getItem('name'))
    
        setGLoggedInUser(localStorage.getItem('name'))
    },[])
    const handleLogout =(e)=>{
        localStorage.removeItem('token')
        localStorage.removeItem('loggedInUser')
        localStorage.removeItem('name')
        localStorage.removeItem('google')
        localStorage.removeItem('simplelogin')

        setTimeout(()=>{
          navigate('/')
        },1000)
    }
  return (
    
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" className={`w-full h-[10vh] flex justify-between text-${props.textColor} px-10 items-center bg-[${color}] font-[Poppins]`}>
      <h1 className='text-3xl font-semibold '>Mom'sKitchen.ai <sub className='text-[10px]'>(admin page)</sub></h1>
      <div className='flex h-[6vh] w-[50vw] justify-around items-center'>
        <button onClick={()=>{navigate('/admin/user-details'); console.log("clicked")}} className='w-[8vw]  h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Users Details</button>
        <button onClick={()=>navigate('/admin/add-product')} className='w-[8vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Add Product</button>
        <button onClick={()=>navigate('/grocery')} className='w-[9vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Add Chef</button>
        <button onClick={()=>navigate('/invitechef')} className='w-[7vw] h-[6vh] border-2 border-transparent rounded-md hover:border-2 hover:border-white hover:rounded-md duration-300'>Orders</button>
        <div>
         
        <h1 className='font-semibold text-3xl border-2 w-10 h-10 flex justify-center items-center rounded-full uppercase '>{loggedInUser?loggedInUser?.split("")[1]:GloggedInUser?.split("")[0]}</h1>

        </div>
        <button onClick={handleLogout} className="bg-white duration-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Logout</button>
        
        
      </div>
      
    </div>
  )
}

export default Adminnav
