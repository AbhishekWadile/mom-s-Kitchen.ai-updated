import React, { useEffect, useState, useRef } from "react";
import Aftnav from "../components/Aftnav";
import GsearchBar from "../components/GsearchBar";
import Productcard from "../components/Productcard";
import Loading from "../components/Loading";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import cart from "../images/cart.png";
import delivaryTruck from "../images/delivery-truck.png";
import servicesicon from "../images/icons8-services-240.png";
import money from "../images/money-back-guarantee.png";
import rb from "../images/rb_49582.png";
import securePayment from "../images/secure-payment.png";
import Grating from "../components/Grating";
import Footer from "../components/Footer";

function Grocery() {
  const items = useSelector((state) => state);
  console.log(items.cart);
  const [openclose, setOpenClose] = useState(false);
 
  const offer = [
    {
      img: delivaryTruck,
      name1: "Free",
      name2: "Shopping",
      desc: "Order online and get FREE shipping on all grocery purchases over $75! Fresh, quality ingredients delivered to your doorstep—no extra fees! Start shopping now.",
    },
    {
      img: money,
      name1: "Money",
      name2: "Return",
      desc: "Refunds will be issued to your original payment method within 7-10 business days. For any inquiries, our customer service team is ready to assist.",
    },
    {
      img: rb,
      name1: "Support",
      name2: "24/7",
      desc: "Refunds will be issued to your original payment method within 7-10 business days. For any inquiries, our customer service team is ready to assist.",
    },
    {
      img: securePayment,
      name1: "Safe",
      name2: "Payment",
      desc: "Feel good about shopping with us—your safety is our commitment.",
    },
    {
      img: servicesicon,
      name1: "Ser",
      name2: "vices",
      desc: "Explore our services today and see how we can enhance your grocery shopping experience.",
    },
  ];

  const scrollonup = () => {
    console.log("detecting...");
    window.scroll({ top: 645, behavior: "smooth" });
  };

  return (
    <div className="h-auto scrollbar-thin scrollbar-thumb-teal-500">
      <div className="bg-grocery-banner bg-cover bg-white h-screen w-[100%] font-[poppins]">
        <Aftnav color={"#008C59"} textColor="white" />
        <div className="h-[68vh] w-[50%] mt-32 ml-32">
          <div className="font-semibold leading-[15vh] tracking-tight text-[18vh] text-white">
            BUY <span className="text-[#055437]">BEST</span>
            <br />
            <div className="font-semibold text-[10vh]">
              <span className="text-[#055437]">ORGANIC</span> PRODUCTS
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            minima aliquid necessitatibus voluptatem eligendi laborum illum in
            quidem aperiam, non placeat at sint fugiat nam consequatur,
            cupiditate libero vitae iure.
          </p>
          <button
            className="w-[40%] bg-[#055437] h-[7vh] mt-6 text-white rounded-md shadow-2xl hover:bg-[#F9804C] duration-300 font-semibold text-xl"
            onClick={() => scrollonup()}
          >
            Get Yours Now
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-auto">
        <GsearchBar />
      </div>

      {/* <div className="sticky flex gap-5"> */}
      <div
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-once="false"
        className="w-[5%] flex justify-center items-center text-5xl h-[10vh] sticky cursor-pointer left-[92%]  bottom-9 pl-2 bg-yellow-400 rounded-full"
      >
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="false"
          onClick={(e) => setOpenClose(!openclose)}
          className="w-[250%] flex justify-center items-center text-5xl h-[0vh] sticky cursor-pointer left-[92%]  bottom-9 bg-yellow-400 rounded-full"
        >
          <TiShoppingCart />
        </div>
        <div className="relative duration-200 -left-14 text-[17px] font-semibold -top-7">
          {items.cart.length}
        </div>
      </div>
      <div className="w-full relative top-[0vh] h-[80vh] flex justify-center items-center">
        <div className="w-[90%] h-full flex flex-col justify-center items-center">
          <h1 className="font-[poppins] font-semibold text-4xl text-[#FFBF00]">
            About <span className="text-[#055437]">Us</span>
          </h1>
          <div className="flex gap-32 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10">
              <h1 className="font-[poppins] font-semibold text-4xl text-[#FFBF00]">
                Your <span className="text-[#055437]">Daily Dose of</span>{" "}
                Freshness
              </h1>
              <p className="text-xl">
                "Your Daily Dose of Freshness" is a vibrant initiative designed
                to infuse your day with inspiration, creativity, and positivity.
                Each day, we curate a selection of refreshing content—be it
                uplifting quotes, thought-provoking articles, innovative ideas,
                or engaging activities—that encourages you to break free from
                routine and explore new perspectives.
              </p>
              <button className="w-[20%] h-[7vh] font-xl rounded-md flex justify-center items-center text-white bg-[#055437] duration-200 hover:bg-[#FFBF00]">
                Read More
              </button>
            </div>
            <img src={cart} alt="" className="w-[60%] h-[60vh]" />
          </div>
        </div>
      </div>
      <div className="w-full relative h-[40vh] flex justify-center items-center">
        <div className="w-full p-1 h-full flex justify-center items-center">
          {offer &&
            offer.map((item, index) => (
              <div key={index} className="w-full">
                <div className="w-[96%] h-[25vh] flex justify-center items-center rounded-2xl gap-1 border-2 border-black ">
                  <img
                    src={item.img}
                    alt=""
                    className=" pl-1 w-[30%] h-[10vh]"
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="relative -left-3 font-[poppins] font-semibold text-xl text-[#FFBF00]">
                      <span className="text-[#055437]">{item.name1}</span>{item.name2}
                    </h1>
                    <p className="text-[12px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`sticky left-[100%] ${
          openclose === true ? "-translate-x-[0vh]" : "translate-x-[90vh]"
        } h-auto w-[40%] bottom-[0.5vh] flex duration-300 justify-center items-center border-2`}
      >
        <Cart />
      </div>
      {/* </div> */}
      <Grating/>
      <Footer/>
    </div>
  );
}

export default Grocery;
// bg-[#9FE394]
