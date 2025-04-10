import React from "react";
import Aftnav from "../components/Aftnav";
import InviteCardservices from "../components/InviteCardservices";
import ChefServices from "../components/ChefServices";
import Chef_Card from "../components/Chef_Card"
import Chefamain_card from "../components/Chefamain_card";
import Footer from "../components/Footer";

function InviteChef() {
  return (
    <div className="h-auto overflow-hidden">
      <div className="bg-bgimg bg-cover bg-white h-screen w-[100%] font-[poppins]">
        <div className="w-full h-full gap-36 text-white flex flex-col items-center bg-blackOverlay">
            <Aftnav/>
          <h1 className="font-sans w-[40%] relative -left-56 font-semibold text-white text-[10vh]">
            <p className="uppercase">Home made Kitchen like test</p>
            <h2 className="text-2xl">Bring the Taste of a Chef's Kitchen to Your Home!</h2>
          </h1>
        </div>
      </div>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div className="w-[25%] z-30 relative left-20 bg-cover top-1 drop-shadow-2xl h-[80vh] bg-chef1"></div>
        <div className="w-[65%] relative top-24 -left-24 h-[50vh] flex justify-center items-center p-[5vh] pl-[30vh] shadow-xl rounded-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor delectus aliquid perferendis, temporibus obcaecati culpa officia corrupti molestiae, tempora quaerat nesciunt suscipit incidunt labore eius modi consequatur consequuntur error enim veniam dolores.</div>
      </div>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        {/* <div className="w-[25%] z-30 relative left-20 top-1 drop-shadow-2xl h-[80vh] bg-chef1"></div> */}
        <div className="w-[65%] relative top-[2vh] left-36 h-[50vh] flex justify-center items-center p-[5vh] pr-[25vh] shadow-xl rounded-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor delectus aliquid perferendis, temporibus obcaecati culpa officia corrupti molestiae, tempora quaerat nesciunt suscipit incidunt labore eius modi consequatur consequuntur error enim veniam dolores.</div>
      <div className="w-[25%] z-30 relative -left-10 bg-cover -top-20 drop-shadow-2xl h-[80vh] bg-chef2"></div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <InviteCardservices/>
      </div>
      <div className="w-[100%] h-auto mt-14 flex gap-16 justify-center items-center flex-col">
        <h1 className='text-3xl font-semibold font-[poppins]'>Our Chef Services</h1>
        <ChefServices/>
      </div>
      <div className="mt-4 mb-[10vh]">
        <h1 className="text-3xl font-poppins font-bold w-full flex justify-center mt-6 ">Our Chefs</h1>
        <div className="w-full flex justify-center "><hr  className="w-[20%] border-2xl border-black"/></div>
        <Chefamain_card/>
      </div>
      <Footer/>
    </div>
  );
}

export default InviteChef;
