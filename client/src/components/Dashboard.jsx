import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [userInfo,setUserInfo] = useState(null)
  useEffect(()=>{
    const data = localStorage.getItem('user-info')
    const userData = JSON.parse(data)
    setUserInfo(userData)
  },[])

  const handleLogout = () =>{
    localStorage.removeItem('user-info')
    navigate('/login')
  }
  return (
    <div className='flex flex-col gap-4 justify-center items-center text-3xl h-screen w-full'>
      <h1>Welcome {userInfo?.name}</h1>
      <h1 className='text-xl'>Email: {userInfo?.email}</h1>
      <img className='text-xl' src={userInfo?.image} alt={userInfo?.email} />
      <button className="bg-blue-500 hover:bg-blue-700 text-xl text-white flex gap-3 justify-center items-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
