import React from 'react'
import img2 from "../images/Technician.png";
import { NavLink } from 'react-router-dom';
export default function Naavbar() {
  return (
    <div className='z-10'>
         <div className=" flex justify-between bg-[#A9B7EB] ">
          <div className="  flex items-start ">
            <img src={img2} alt="" className=" h-[100px] w-[100px]" />
          </div>
          <nav>
            <ul className=" flex gap-5 p-6 text-[#0118E6]  font-medium tracking-wide  ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <NavLink to='/buyer'>Sign Up</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
