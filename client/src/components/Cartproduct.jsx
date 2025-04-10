import React from "react";
import jpg from "../../src/images/gro.jpg"
import {removeItem} from '../redux/slices/cartSlice'
import { useDispatch } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Cartproduct(props) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-center gap-4 px-2 items-center rounded-md border-2 w-full h-auto">
      <img src={props.img} alt="" className="w-20 rounded-md h-20"/>
      <div className="flex-col w-[60%] gap-1 items-center">
        <h1>{props.name}</h1>
        <p>bjdihdiuhedjijiidcniuedhejnuiefh</p>
        <p>Quantity</p>
        <p className="text-green-600 flex gap-1 items-center">{props.price}<span className="text-black"><MdOutlineCurrencyRupee /></span></p>
      </div>
      <div className="flex-col justify-around h-[20vh] text-[15px] text-white items-center gap-3">
        {/* <button className="w-[80%] px-1 py-2 h-[6vh] rounded-md mt-5 bg-green-600">Buy now</button> */}
        <button onClick={(e)=>dispatch(removeItem({img:props.img,name:props.name,price:props.price}))} className="w-[100%] px-1 py-2 h-[6vh] mt-[7vh] rounded-md bg-red-600">Remove</button>
      </div>
    </div>
  );
}

export default Cartproduct;
