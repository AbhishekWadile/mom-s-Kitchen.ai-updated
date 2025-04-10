import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MdDone } from "react-icons/md";

function PaymentAcknowledgement() {
  const paymentId = useParams();
  const navigate = useNavigate();
  console.log(paymentId.payment_id);
  // const paymentId = pay?.replace(/:/i, "")
  const [responseState, setResponseState] = React.useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/payment/${paymentId.payment_id?.replace(
          ":",
          ""
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
      })
      .catch((error) => {
        console.log("error occures", error);
      });
  });

  return (
    <div className="w-full font-[poppins] h-screen flex bg-orange-300  justify-center items-center">
      <div className="w-[50%] shadow-2xl rounded-xl bg-white flex flex-col justify-center items-center gap-8 h-[80vh]">
        <h1 className=" text-3xl font-semibold">This is payment verification form</h1>

        {responseState.length !== 0 && (
          <ul className="flex flex-col items-center gap-4">
            <li>Amount: {responseState.amount / 100} Rs.</li>
            <li>Currency: {responseState.currency}</li>
            <li>Status: {responseState.status}</li>
            <li>Method: {responseState.method}</li>
          </ul>
        )}
        <h1 className=" text-3xl text-green-500 font-semibold">SUCCESS</h1>
        <div className="w-[10vh] bg-green-500 hover:transform:rotateY(360deg) duration-1000 text-white rounded-full flex justify-center items-center text-3xl h-[10vh]"><MdDone /></div>
        <button onClick={()=>navigate('/grocery')} className="w-[30vh] bg-green-500  text-white rounded-full flex justify-center items-center text-sm h-[7vh]">Go to Back</button>
      </div>
    </div>
  );
}

export default PaymentAcknowledgement;
