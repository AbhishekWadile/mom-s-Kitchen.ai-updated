import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from './GoogleAuth'
function Signup() {
  const [signupInfo,setSignupInfo] = useState({
    name:" ",
    email:" ",
    password:" ",
  })
  const navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    const copySignupInfo = {...signupInfo}
    copySignupInfo[name]=value;
    setSignupInfo(copySignupInfo)
  }
  const GoogleAuthWrapper = () =>{
    return(
     <GoogleOAuthProvider clientId='493295221392-bh9rmp05fjdlekuhos5m7ej2h71r2lcm.apps.googleusercontent.com'>
       <GoogleAuth></GoogleAuth>
     </GoogleOAuthProvider>
    )
 }
  const handleSignup=async(e)=>{
    e.preventDefault()
    const {name,email,password}=signupInfo
    if(!name||!email||!password){
        return handleError("name,email,password are required")
    }
    try{
        const url = "http://localhost:8080/auth/signup";
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(signupInfo)
        });
        const result = await response.json()
        const {success,message,error}=result
        if(success){
            handleSuccess(message)
            setTimeout(()=>{
                navigate('/login')
            },1000)
        }else if(error){
            const details = error?.details[0].message;
            handleError(details)
        }else if(!success){
            handleError(message)
        }
        console.log(result);
    }catch(err){
        handleError(err)
    }  
}

//   console.log('loginInfo->',signupInfo)
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
    <div className="bg-signup bg-cover w-[70vh] h-[90vh]"></div>
    <div className="container max-w-md p-4 pt-6 md:p-6 md:pt-12">
    <h1 className="text-3xl font-bold mb-4">Signup</h1>
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          type="text"
          name="name"
          autoFocus
          placeholder="Enter your name..."
          value={signupInfo.name}
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={signupInfo.email}
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={signupInfo.password}
        />
      </div>
      <div className='flex flex-col justify-center gap-3 mt-24 items-center w-full h-[2vh]'>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type='submit'
            >
            SignUp
        </button>
        <span className="text-gray-600">
            Already have an account ?
            <Link className="text-blue-600 hover:text-blue-800" to="/login">Login</Link>
        </span>
        <div className="relative top-24  -left-[116vh]">

        <GoogleAuthWrapper />
        </div>
      </div>
    </form>
    <ToastContainer />
  </div>
  </div>
  )
}

export default Signup

