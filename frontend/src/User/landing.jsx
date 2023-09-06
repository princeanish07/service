import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { easeInOut, motion, spring } from "framer-motion";
import img1 from "../images/providers2.png";
import img2 from "../images/Technician.png";
import Naavbar from "./Naavbar";
export default function Landing() {
  const [isdiplay,setdisplay]=useState(true)
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col h-screen font-sans text-[1em]   ">
       <Naavbar/>
         <motion.div
          className=" flex-1  grid  grid-cols-2  w-full p-10 bg-gradient-to-tr from-[#004B8F] to-[#02215B]  place-content-center  "
          initial={{
            opacity: 0,
            y:'100Vh'
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            
          }}
        >
               {
              !isdiplay && <div className=" grid ">
                <Outlet/>
              </div>
            }
         
         {
          isdiplay?
      
          <motion.div
            className="  grid   place-content-center gap-10 p-32 shadow-lg bg-[rgba(0,0,0,.2)] "
            initial={{
              opacity: 0,
              scale: 0.5,
              x:'-100Vw'
            }}
            animate={{
              x:0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay:.5
            }}
          >
         
            <div>
              <h3 className="text-2xl  text-gray-100   font-sans tracking-wider">
                Find and hire professionals easily for any service you need on
                our marketplace
              </h3>

            </div>
            <motion.div className=" grid place-content-center"
              
                  initial={{
                    opacity: 0,
                    scale:0.5
                  }}
                  animate={{
                    opacity: 1,
                    scale:1
                  }}
                  transition={{
                    delay: 1,
                    duration:1
                  }}
                >
                  <ul className=" flex gap-4">
                    <li>
                  <NavLink
                    className="   p-2 px-5 shadow  text-[1em] text-gray-100 font-medium bg-[#004B8F] rounded-full hover:bg-[#0111FF] hover:text-white"
                  to='/buyer'                  
                  >
                    {" Customer"}
                   
                  </NavLink>

                    </li>
                    <li>
                  <NavLink
                    className="   p-2 px-5 shadow  text-[1em] text-gray-100 font-medium bg-[#D62715] rounded-full hover:bg-[#0111FF] hover:text-white"
                  to='seller/login'
                  
                  
                  >
                    {" Provider"}
                   
                  </NavLink>


                    </li>
                  </ul>
            </motion.div>
          </motion.div>:null
} 

          <motion.div
            className=" h-full grid place-content-center  bg-[rgba(0,0,0,.1)] "
            initial={{
              opacity: 0,
              x: "100Vw",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            <img src={img1} alt="" className=" " />
          </motion.div>
        </motion.div>
          
        
      </div>
    </>
  );
}
