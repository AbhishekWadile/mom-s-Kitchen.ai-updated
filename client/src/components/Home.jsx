import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import{ToastContainer} from 'react-toastify';
import Aftnav from './Aftnav';
import { FaArrowDown } from "react-icons/fa";

// import Working from './Working1';
import Working1 from './Working1';
import Working2 from './Working2';
import DeveloperInfo from './developerInfo';
import Footer from './Footer';
import MomsBot from './MomsBot';
import Cha from './Cha';


function Home() {
  const [loggedInUser,setLoggedInUser]=useState('');
  const [GloggedInUser,setGLoggedInUser]=useState('');

  const [products,setProducts]=useState('')
  const navigate = useNavigate();


  useEffect(()=>{
      
      setLoggedInUser(localStorage.getItem('loggedInUser'))
      
      setGLoggedInUser(localStorage.getItem('name'))
  },[])

  const handleLogout =(e)=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    localStorage.removeItem('name')
    localStorage.removeItem('google')
    localStorage.removeItem('simplelogin')
    handleSuccess('User loggedout')
    setTimeout(()=>{
      navigate('/')
    },1000)
  }
  
  const scrollonup=()=>{
    console.log("detecting...")
    window.scroll({top:245, behavior: 'smooth' })
  }
  // useEffect(()=>{
  //   fetchProducts();
  // },[])
  return (
    <div className='flex flex-col justify-center gap-4 overflow-hidden h-auto items-center'>
      <div className={`bg-land-img bg-cover flex flex-col justify-center items-center text-white w-full h-[95vh]`}>
       <Aftnav />
       <div className='w-[70vw] h-[80vh] flex justify-center items-center'>
        <div className='w-[50vw] h-[70vh] flex flex-col justify-center items-center'>
            <h1 className='text-6xl flex justify-center items-center font-semibold'>
                Welcomes to our <br /> MomsKitchen.Ai
            </h1>
            <p className='text-1xl flex justify-center items-center mx-11  font-normal'>a duuhd jshijsbjb ibdbdbwd wd w d wiud w iu fiw bifbi wbi iduiuwduh wibd <br /> w ihw  wdh wduh dw w wdbwd hwudhhud wduiwiud iwidui bdwd uiw dh </p>
            <button onClick={()=>scrollonup()} data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" className='w-[4.8vw] relative top-32 h-[10vh] flex justify-center items-center text-3xl rounded-full border-2 border-white'><FaArrowDown /></button>
        </div>
       </div>
    </div>
      {/* <Card1/>
      <Card2/>
      <Card3/> */}
      <Working1/>
      <Working2/>
      <Cha/>
      <div className='w-[100%] flex flex-col gap-7 justify-center items-center h-[80vh]'>
        <h1 className='text-3xl font-semibold font-[poppins]'>Our Developers</h1>
        <DeveloperInfo/>
      </div>
      <ToastContainer/>
      <Footer/>
    </div>

  )
}

export default Home
