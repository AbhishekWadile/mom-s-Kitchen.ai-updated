import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import React, { useEffect } from 'react';

function Payment() {
  const navigate = useNavigate();
  const total = useParams();
  console.log(total);
  const just = total.total
  const mainPrice = parseInt(just?.replace(/:/i, ""));
  const mainP = 0.69+0.69+mainPrice;

  const [responseId, setResponseId] = React.useState("");
  // const [responseState, setResponseState] = React.useState([]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/orders",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleRazorpayScreen(response.data.amount);
      })
      .catch((error) => {
        console.log("error at", error);
      });

    
  };
  useEffect(()=>{
    if(responseId){
      navigate(`/acknowledgement/:${responseId}`)
    }
  })

  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Some error at razorpay screen loading");
      return;
    }

    const options = {
      key: "rzp_test_9xdmZH9A5sqNqO",
      amount: amount,
      currency: "INR",
      name: "Mom's kitchen.ai",
      description: "payment to Mom's kitchen.ai",
      image: "https://papayacoders.com/demo.png",
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: "Mom's kitchen.ai",
        email: "wadileabhishek62@gmail.com",
      },
      theme: {
        color: "#F4C430",
      },
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
  };

  return (
    <div className="w-[100%] overflow-hidden bg-orange-300  flex flex-col justify-center items-center h-screen">
      <div className="w-[80%] h-[100vh]  flex justify-center items-center">
        <div className="flex-col justify-center items-center relative top-15 left-[24%]  w-[80%]">
          <div className="w-[40%] shadow-lg rounded-t-3xl border-dashed border-b-2 flex flex-col justify-center items-center border-gray-300 h-[30vh] bg-white">
            <div className="flex items-center justify-center bg-pink-500 w-12 h-12 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM8 15.938V20h8v-4.063C15.125 14.813 13.594 14 12 14c-1.594 0-3.125.813-4 1.938z"
                />
              </svg>
            </div>
            <h2 className="text-center text-pink-600 font-bold text-xl">
              Confirmation
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Please confirm the following transaction:
            </p>
          </div>
          <div className="w-[4vh] relative -top-4 -left-2 h-[5vh] bg-orange-300 z-20  rounded-r-full"></div>
          <div className="w-[4vh] h-[5vh] relative z-20 bg-orange-300 left-[55vh] -top-[7.4vh] rounded-l-full"></div>
          <div className="w-[40%] h-[40vh] relative -top-[10vh] shadow-lg  bg-white">
            <div className="text-left p-7 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>To:</span>
                <span className="font-semibold">Mom's Kitchen.ai</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Date:</span>
                <span className="font-semibold">Fri, 29 March, 2024</span>
              </div>
              <hr className="my-2 border-t border-gray-200" />
              <div className="flex justify-between text-gray-700">
                <span>Amount:</span>
                <span className="font-semibold">Rs. {total.total}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>CGST:</span>
                <span className="font-semibold">Rs. 0.69</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>SGST:</span>
                <span className="font-semibold">Rs. 0.69</span>
              </div>
              <hr className="my-2 border-t border-gray-200" />
              <div className="flex justify-between text-pink-600 text-2xl font-bold">
                <span>Total:</span>
                <span>Rs. {mainP}</span>
              </div>
            </div>

            <button onClick={() => createRazorpayOrder(mainP)} className="w-full py-2 mt-4 bg-pink-500 outline-none text-white font-semibold rounded-lg relative top-4 shadow-md hover:bg-pink-600">
              Credit / Debit Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
