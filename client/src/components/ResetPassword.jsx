import React, { useState } from 'react'
import { BiLockAlt } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import axios from 'axios';


function ResetPassword() {
    const [password, setPassword] = useState({
        email2: " "
    });
    const {id,token} = useParams()
    console.log(typeof email)
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const password1 = password;
        console.log(password1)
        if (!password1) {
          return handleError("email are required");
        }

        //   const url = "http://localhost:8080/forgotpassword/";
          axios.post(`http://localhost:8080/reset-password/${id}/${token}`,{password1})
          .then(res=>{
            console.log("login:"+res.data.Status);
            if(res.data.Status === "Success"){
                handleSuccess(res.data.message)
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            }else if(res.data.code === true){
                handleError(res.data.Status)
            }
          }).catch(err=>console.log(err))
        
    };
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[80vh] flex flex-col rounded-md justify-center items-center h-[60vh] shadow-xl'>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[10vh] h-[10vh] rounded-full flex justify-center items-center text-2xl font-semibold text-white bg-blue-500'><BiLockAlt /></div>
            <h1 className='text-2xl font-semibold'>Reset your password</h1>
            <p className='mt-3'>Enter your new password</p>
        </div>
        <form onSubmit={handleLogin} className='flex gap-2 flex-col justify-center items-center w-[80vh] h-[20vh]'>
            <label htmlFor="password" className='relative -left-[20vh]'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder='Enter your email' className='w-[50vh] pl-3 rounded-md outline-none border-[1px] h-[5vh]' />
            <button type="submit" className='w-[50vh] h-[5vh] rounded-md bg-blue-500 hover:bg-blue-700 text-1xl text-white font-semibold focus:outline-none focus:shadow-outline'>Update</button>
        </form>
        <button onClick={()=>navigate('/login')} className='flex text-xl items-center gap-3'>
            <FaArrowLeft />
            <div className='text-[3vh] text-purple-900'>Return back to login page </div>
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ResetPassword
