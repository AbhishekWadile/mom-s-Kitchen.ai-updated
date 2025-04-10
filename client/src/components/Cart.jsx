import React, { useState } from "react";
import Cartproduct from "./Cartproduct";
import { useSelector } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

function Cart() {
  const items = useSelector((state) => state);
  console.log(items.cart);
  const total = items.cart.reduce((a,b)=>a + b.price,0)
  // const [cartProduct, setCartProduct] = useState();
  // setCartProduct(items.cart);
  const navigate = useNavigate();

  const navg =() =>{
    navigate(`/payment/:${total}`)
  }
  return (
    <>
      <div className="w-[100%] scrollbar-thin scrollbar-thumb-teal-500 flex flex-col h-[99vh] overflow-hidden overflow-y-scroll p-2 bg-blurbg backdrop-blur gap-2 border-[2px] rounded-md">
        {items.cart &&
          items.cart?.map((item, index) => (
            <div key={index}>
              <Cartproduct img={item.img} name={item.name} price={item.price} />
            </div>
          ))}
        <div className="flex relative left-40 justify-center text-[15px] gap-10 items-center mt-9 h-[10vh] w-[40vh]">
          <p className="flex gap-1 items-center text-xl font-semibold">Price:{total} <MdOutlineCurrencyRupee /></p>
          <button onClick={(e)=>navg()} className="w-[50%] h-[8vh] bg-[#16a34a] text-white rounded-md">Proceed to Pay</button>
        </div>
      </div>
      <div className="hidden">

      <Payment/>
      </div>
    </>
  );
}

export default Cart;
