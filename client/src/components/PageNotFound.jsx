import React from 'react'
import { useNavigate } from 'react-router-dom'


function PageNotFound() {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-screen w-full'>

    <div className='bg-pageNfound bg-cover flex flex-col gap-6 justify-center items-center h-[80vh] w-[100vh]'>
      <h1 className='text-[20vh] relative -top-28 font-semibold text-cyan-500'>404</h1>
      <div className='flex flex-col justify-center items-center gap-6 relative top-14'>

      <p className='text-2xl font-semibold text-gray-500'>Oops.....! Page not Found</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default PageNotFound
