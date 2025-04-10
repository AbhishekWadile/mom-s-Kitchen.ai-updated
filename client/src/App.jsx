import React, { useEffect, useState } from "react";
// import Navbar from './components/Navbar'
import ig from "./images/img2.jpg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from "./components/GoogleAuth";
import Landing from "./components/Landing";
import Services from "./components/Services";
import LocomotiveScroll from "locomotive-scroll";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ForgPassword from "./components/ForgPassword";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RefreshHandler from "./components/RefreshHandler";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./components/ResetPassword";
import GetStart from "./components/GetStart";
import HighLighter from "./components/HighLighter";
import Footer from "./components/Footer";
import Grocery from "./pages/Grocery";
import Payment from "./components/Payment";
import ConfirmationCard from "./components/ConfirmationCard";
import PaymentAcknowledgement from "./components/PaymentAcknowledgement";
import InviteChef from "./pages/InviteChef";
import Blog from "./pages/Blog";
import Loading from "./components/Loading";
// import {privateAxios} from "./services/axios.service";
import axios from "axios";
import Chef_info from "./pages/Chef_info";
import ThankyouBookCh from "./components/ThankyouBookCh";
import Admin_page from "./pages/Admin_page";
import Ad_userDetails from "./Admin/Ad_userDetails";
import Ad_addProduct from "./Admin/Ad_addProduct";
import MomsBot from "./components/MomsBot";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="493295221392-bh9rmp05fjdlekuhos5m7ej2h71r2lcm.apps.googleusercontent.com">
        <GoogleAuth></GoogleAuth>
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  const [load,setLoad]=useState(false);

  useEffect(()=>{
    axios.interceptors.request.use(
      (config)=>{
        setLoad(true);
        return config;
      },
      (error)=>{
        // setLoad(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (config)=>{
        setLoad(false);
        return config;
      },
      (error)=>{
        // setLoad(false);
        return Promise.reject(error);
      }
    );
  },[])

  return (

    // <div className='font-[poppins]'>
    //   <Landing/>
    //   <Services/>
    // </div>
    // <Signup/>
    // <Login/>
    <div>
      <BrowserRouter className="font-[poppins]">
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Loading show={load} />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Landing />
                <Services />
                <GetStart />
                <HighLighter />
                <Footer />
              </React.Fragment>
            }
          ></Route>
          






          {/* <Route path='/' element={}></Route> */}
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
                <GoogleAuthWrapper />
              </React.Fragment>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/home"
            element={
              <PrivateRoute
                element={
                  <React.Fragment>
                    <Home />
                    {/* <Dashboard/> */}
                  </React.Fragment>
                }
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/invitechef" element={<InviteChef />} />
          <Route path="/forgotpassword" element={<ForgPassword />} />
          <Route path="/payment/:total" element={<Payment />} />
          <Route path="/acknowledgement/:payment_id" element={<PaymentAcknowledgement />} />
          {/* <Route path="/payment" element={<ConfirmationCard />} /> */}
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/invitechef/chefinfo/:chef_Id/:chId" element={<Chef_info/>}></Route>
          <Route path="/booked" element={<ThankyouBookCh/>}></Route>
          <Route path="/admin" element={<Admin_page/>}>
            <Route path="user-details" element={<Ad_userDetails/>}/>
            <Route path="add-product" element={<Ad_addProduct/>}/>
          </Route>
          <Route path="/chatbot" element={<MomsBot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
