import React from 'react'
import Adminnav from '../Admin/adminnav'
import { Outlet } from 'react-router-dom'
import Ad_userDetails from '../Admin/Ad_userDetails'

function Admin_page() {
  return (
    <div className="bg-black text-white">
      <Adminnav/>
      {/* <div className='h-screen flex justify-center items-center w-full'>
        <h1 className='text-[10vh] font-[poppins] font-semibold'>Welcome to Admin Page</h1>
      </div> */}
      <Outlet/>
    </div>
  )
}

export default Admin_page
