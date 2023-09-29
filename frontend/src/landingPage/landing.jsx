import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { easeInOut, motion, spring } from "framer-motion";
import img1 from "../images/providers2.png";
import Naavbar from "./Naavbar";
export default function Landing() {
  const [isdiplay,setdisplay]=useState(true)
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col h-screen font-sans text-[1em]   ">
       <Naavbar/>
        
          <div
            className=" h-full grid place-content-center  bg-[rgba(0,0,0,.1)] "
  
          >
            <img src={img1} alt="" className=" " />
          </div>
        </div>
          
        
      
   
    </>
  );
}
