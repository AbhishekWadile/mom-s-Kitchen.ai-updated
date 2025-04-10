import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {addItem} from '../redux/slices/cartSlice'
function Productcard(props) {
  const dispatch = useDispatch()
  console.log(props.image);
  return (
    <div className="w-[85%] drop-shadow font-[poppins] flex flex-col gap-1 h-auto py-3 bg-white rounded-md font-semibold ">
      <img src={props.image} alt="" className="h-[40vh] rounded-md ml-7 w-[80%]" />
      <div className="px-7">
        <h3>{props.product_name}</h3>
        <div className="flex justify-between mt-2 items-center ">
          <div>
            <h1 className="text-3xl text-green-500 flex gap-1">
              {props.product_price}{" "}
              <sub className="text-black">
                <FaRupeeSign />
              </sub>
            </h1>
            <p>Stock:{props.stock}</p>
          </div>
          <div>
            <select id="cars" className="w-28 rounded-md outline-none text-gray-500 font-semibold border-[1px]">
              <option value="Quantity">Quantity</option>
              <option value="50g">50g</option>
              <option value="100g">100g</option>
              <option value="200g">200g</option>
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="750g">750g</option>
              <option value="1000g">1000g</option>
              <option value="2000g">2000g</option>
            </select>
          </div>
        </div>
      </div>
      <button onClick={(e)=>dispatch(addItem({img:props.image,name:props.product_name,price:props.product_price}))} className="w-[80%] text-white rounded-md hover:bg-orange-600 duration-300 ml-7 h-[7vh] bg-green-600">
        Add to cart
      </button>
    </div>
  );
}

export default Productcard;
