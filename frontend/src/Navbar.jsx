import React, { useEffect } from 'react'
import img2 from "./images/Technician.png";
import { NavLink, useLocation,useNavigate } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";

export default function Naavbar() {

    const logged=localStorage.getItem('logged')
    const navigate=useNavigate();
    const location= useLocation();
  
  return (
         <nav className="flex sticky top-0 bg-blue-600 p-1  ">
          <div className="  flex items-start ">
            <img src={img2} alt="" className=" h-[80px] w-[80px]" />
          </div>
          <div className={`flex-1 place-self-center grid grid-cols-2 ${logged ? 'grid-cols-2' : 'grid-cols-3'}`}>
          <div className={`flex   rounded-sm justify-self-center bg-white ${!logged? 'col-span-2' : ''}`}>
                <div className=" w-[25Vw] ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="  flex-1  w-full p-3 text-gray-800  focus:outline-none rounded-sm text-sm"
                    placeholder="Search Your Services"
                  />
                </div> 
                <div className="  bg-gray-300 rounded-sm w-[100px] flex place-content-center ">
                  <button className=' '>
                    <FaSearch className=" text-blue-600 text-[1.5em] " />
                  </button>
                </div>
              </div>
              <div className='grid content-center  '>

            <ul className=" flex justify-evenly text-white  font-medium tracking-wide  ">
            <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              {
                !logged? (<>
                <li>
                <NavLink to='/signIn' state={{
                  path:location.pathname
                }}>Sign In</NavLink>
              </li>
              <li>
                <NavLink to='/signup'  state={{
                  path:location.pathname
                }}>Sign Up</NavLink>
              </li>
              </>
              ):<>
               <li>
                <NavLink to='/user/profile'>Profile</NavLink>
              </li>
              <li>
                <NavLink to='/user/order'>Orders</NavLink>
              </li>
              <li>
                <NavLink to='/user/category'>Category</NavLink>
              </li>
              <li>
                <NavLink to='/user/service'>Services</NavLink>
              </li>
              <li>
               <button onClick={()=>{
               const value= confirm('Are you sure tha you want to log out form this session');
              if(value){
                localStorage.removeItem('logged');
                localStorage.removeItem('userId');
                navigate('/',{replace:true})
                window.location.href="/Category/All"
              }
               }}>Log Out</button>
              </li>
              </>
              }
            </ul>
            </div>

          </div>
        </nav>
  )
}
