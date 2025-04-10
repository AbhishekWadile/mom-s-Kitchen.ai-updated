import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from './GoogleAuth'
import { Link, useNavigate } from "react-router-dom";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../api";
// import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
// import {GoogleOAuthProvider} from "@react-oauth/google"
function Login() {
  
  const [loginInfo, setLoginInfo] = useState({
    email: " ",
    password: " ",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email,password are required");
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("name", name);
        localStorage.setItem("simplelogin",success);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
    <div className="bg-login bg-cover w-[70vh] h-[90vh]"></div>
    <div className="container max-w-md p-4 pt-6 md:p-6 md:pt-12">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={loginInfo.email}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={loginInfo.password}
          />
        </div>
        <button onClick={()=>navigate('/forgotpassword')} className="text-purple-900">Forget password?</button>
        <div className="flex flex-col justify-center gap-3 mt-16 items-center w-full h-[2vh]">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <span className="text-gray-600">
            Don't have an account ?
            <Link className="text-blue-600 hover:text-blue-800" to="/signup">
              Sign Up
            </Link>
          </span>
          {/* <GoogleAuthWrapper/> */}
          
        </div>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
}

export default Login;
