import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import img from "../../../images/Plumber.png";
import img1 from "../../../images/logo.png";
 const navbar = () => {
    const nav = [
        {
            link: "/home",
            name: "Home",
          },
        {
          link: "profile",
          name: "Profile",
        },
        {
          link: "/requests",
          name: "Your Requests",
        },
        {
          link: "service",
          name: "Your Services",
        },
      ];
  return (
    <div className='flex sticky top-0 z-auto '>
         <div className=" grid place-content-center ">
            <h2 className="p-2 text-xl">BIPIN KUNWAR</h2>
          </div>

          <nav className=" flex  p-2  flex-1 justify-end  ">
            <ul className=" flex   text-sm font-medium gap-10  px-5 place-self-center">
              {nav.map((nav) => (
                <li>
                  <NavLink to={nav.link}>{nav.name}</NavLink>
                </li>
              ))}
            </ul>
            <div className="h-8 w-8 ">
              <img src={img1} alt="" className="h-full w-full  rounded-full" />
            </div>
          </nav>
        </div>
  )
}
export default navbar