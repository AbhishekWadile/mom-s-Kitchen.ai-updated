import React, { useEffect, useState } from "react";
import img from "../images/chef.jpg";
import Star from "./Star";

function Grating() {
  const [Grat, setGrat] = useState();
  const fetchGret = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/grocery/getAllGrating"
      );
      const result = await response.json();
      setGrat(result);
      console.log(Grat);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGret();
  }, []);
  return (
    <div className="w-full h-[100vh] justify-around flex flex-col items-center">
      <h1 className="text-4xl font-[poppins] text-[#055437]">
        Ra<span class="text-[#FFBF00]">views</span>
      </h1>
      <div className="h-[80vh] font-[poppins] text-white w-[100%] flex justify-center items-center">
        <div className=" h-[80vh] pb-5 w-[95%] pl-[8vh] grid grid-cols-2 ">
          {Grat &&
            Grat.map((item, index) => (
              <div className="h-[34vh] w-[90%] rounded-md shadow-xl " key={index}>
                <div className="h-[10vh] bg-[#055437] rounded-t-md w-[100%] flex justify-center items-center">
                  <div className="h-[10vh]  w-[50%] flex items-center justify-center gap-[10%]">
                    <img
                      src={item.Rat_img}
                      alt=""
                      className="h-[9vh] w-[20%] rounded-full flex justify-center items-center"
                    />
                    <div className="text-xl"> {item.Rat_name} </div>
                  </div>
                  <div className="h-[10vh] w-[50%] flex justify-end pr-9 items-center"> <Star stars={item.Rat} /></div>
                </div>
                <div className="h-[24vh] p-3 w-[100%] text-black flex flex-col justify-center items-center ">
                  <p>
                    {item.Rat_info}
                  </p>
                  <button className="h-[10vh] w-[20%] rounded-md p-1 text-white relative left-[30vh] bg-[#008C59] ">
                    read more
                  </button>
                </div>
              </div>
            ))}

          {/* <div className='h-[34vh] w-[90%] rounded-md shadow-xl '>
            <div className='h-[10vh] bg-[#055437] rounded-t-md w-[100%] flex justify-center items-center'>
            <div className='h-[10vh]  w-[50%] flex items-center justify-center gap-[10%]'>
              <img src={img} alt="" className='h-[9vh] w-auto rounded-full flex justify-center items-center'/>
              <div className='text-xl'>Sanju Sheth </div>
            </div>
            <div className='h-[10vh] w-[50%]'></div>
            </div>
            <div className='h-[24vh] p-3 w-[100%] text-black flex flex-col justify-center items-center '>
            <p>Just had my first delivery from Mom’s Kitchen.AI, and it was seamless! The delivery window was accurate, and the driver was friendly. Everything arrived on time and in perfect condition. I will definitely be using this service regularly.</p>
            <button className='h-[10vh] w-[20%] rounded-md p-1 text-white relative left-[30vh] bg-[#008C59] '>read more</button>

            </div>
            
          </div>
          <div className='h-[34vh] w-[90%] rounded-md shadow-xl '>
            <div className='h-[10vh] bg-[#055437] rounded-t-md w-[100%] flex justify-center items-center'>
            <div className='h-[10vh]  w-[50%] flex items-center justify-center gap-[10%]'>
              <img src={img} alt="" className='h-[9vh] w-auto rounded-full flex justify-center items-center'/>
              <div className='text-xl'>Sanju Sheth </div>
            </div>
            <div className='h-[10vh] w-[50%]'></div>
            </div>
            <div className='h-[24vh] p-3 w-[100%] text-black flex flex-col justify-center items-center '>
            <p>Just had my first delivery from Mom’s Kitchen.AI, and it was seamless! The delivery window was accurate, and the driver was friendly. Everything arrived on time and in perfect condition. I will definitely be using this service regularly.</p>
            <button className='h-[10vh] w-[20%] rounded-md p-1 text-white relative left-[30vh] bg-[#008C59] '>read more</button>

            </div>
            
          </div>
          <div className='h-[34vh] w-[90%] rounded-md shadow-xl '>
            <div className='h-[10vh] bg-[#055437] rounded-t-md w-[100%] flex justify-center items-center'>
            <div className='h-[10vh]  w-[50%] flex items-center justify-center gap-[10%]'>
              <img src={img} alt="" className='h-[9vh] w-auto rounded-full flex justify-center items-center'/>
              <div className='text-xl'>Sanju Sheth </div>
            </div>
            <div className='h-[10vh] w-[50%]'></div>
            </div>
            <div className='h-[24vh] p-3 w-[100%] text-black flex flex-col justify-center items-center '>
            <p>Just had my first delivery from Mom’s Kitchen.AI, and it was seamless! The delivery window was accurate, and the driver was friendly. Everything arrived on time and in perfect condition. I will definitely be using this service regularly.</p>
            <button className='h-[10vh] w-[20%] rounded-md p-1 text-white relative left-[30vh] bg-[#008C59] '>read more</button>

            </div>
            
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Grating;
