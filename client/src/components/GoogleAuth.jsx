import { useGoogleLogin } from '@react-oauth/google';
import React from 'react'
import {googleAuth} from '../api'
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function GoogleAuth() {
    const navigate = useNavigate()
    const responceGoogle = async (authResult) => {
      try {
        if (authResult["code"]) {
          const result = await googleAuth(authResult["code"]);
          const { email, name, image } = result.data.user;
          const obj = { email, name, image};
          
          if (result.data.message === 'Success') {
            handleSuccess(result.data.message);
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("name",result.data.name);
            localStorage.setItem("google",result.data.message);
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
          } else if (!success) {
            handleError(message);
          }
        }
      } catch (err) {
        console.error("Error while requesting google code:", err);
      }
    };
    const googleLogin = useGoogleLogin({
      onSuccess: responceGoogle,
      onError: responceGoogle,
      flow: "auth-code",
    });
  return (
    <div className='flex justify-center items-center relative -top-[14vh] left-[120vh] h-[4vh] w-[50vh]'>
      <button onClick={googleLogin} className="bg-blue-500 hover:bg-blue-700 text-1xl text-white flex gap-3 justify-center items-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><div className='w-[4vh] rounded flex justify-center items-center h-[4vh] bg-white'><FcGoogle /></div>Login with Google</button>
      <ToastContainer />
    </div>
  )
}

export default GoogleAuth
