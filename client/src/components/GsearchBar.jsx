import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Productcard from "../components/Productcard";
import Loading from "./Loading";
function GsearchBar() {
  const [word, setWord] = useState();
  const [products, setProducts] = useState();
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [click, setClick] = useState(true);
  // const [click,setClick] = useState(false)
  const fetchProductsall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getAllProducts`);
      if (response) {
        setClick(true);
      }
      const result = await response.json();
      setProducts(result);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductsall();
  }, []);
  const fetchSProducts = async () => {
    try {
      setClick(!click);
      setLoad2(!load2);
      if (word) {
        setLoad1(!load1);
        const response = await fetch(
          `http://localhost:8080/getAllProducts?category=${word}`
        );
        if (response) {
          setLoad1(!load1);
        }
        console.log(load2);
        const result = await response.json();
        setLoad2(!load2);
        setProducts(result);
      }
      // console.log(products)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-auto">
      <div className=" flex flex-col justify-center items-center h-auto w-full">
        <div className="w-[40%] rounded-full bg-[#055437] flex justify-center items-center mt-16 ">
          <input
            onChange={(e) => setWord(e.target.value)}
            type="text"
            placeholder="Search here for Grocery......"
            name="search"
            className="h-[7vh] rounded-l-full bg-transparent border-r-2 text-white outline-none  pl-4 w-[99%]"

          />
          <div
            onClick={() => fetchSProducts()}
            className="w-[10%] text-white hover:cursor-pointer h-[7vh] flex justify-center items-center text-xl"
          >
            <FaSearch />
          </div>
        </div>

        <div
          className={`w-full px-6 grid grid-cols-4 gap-3 ${
            click === true ? "visible" : "hidden"
          } bg-white mt-7 h-auto`}
        >
          {products && products.map((item, index) => (
              <div key={index}>
                <Productcard
                  image={item.image}
                  product_name={item.product_name}
                  product_price={item.product_price}
                  stock={item.stock}
                />
              </div>
            ))}
        </div>

        <div className={`${load2 === true?"visible":"hidden"}`}>
        {load1 === true ? (
          <div
            className={`w-full px-6 grid grid-cols-4 gap-3 bg-[#9FE394] mt-7 h-auto`}
          >
            {products && products.map((item, index) => (
                <div key={index}>
                  <Productcard
                    image={item.image}
                    product_name={item.product_name}
                    product_price={item.product_price}
                    stock={item.stock}
                  />
                </div>
              ))}
          </div>
        ) : " " }
        {/* { load2 === true ?
          <div>
            <Loading />
          </div> : ""
        }  */}

        </div>
      </div>
    </div>
  );
}

export default GsearchBar;
