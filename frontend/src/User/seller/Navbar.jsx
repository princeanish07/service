import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../images/logo.png";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Profile",
      path: "profile",
    },
    {
      name: "Services",
      path: "category",
    },
    {
      name: "Qualification",
      path: "qualification",
    },
    {
      name: "Portfolio",
      path: "portfolio",
    },
    {
      name: "Review",
      path: "rewiew",
    },
    {
        name:'Account',
        path:'account',
    }
  ];
  return (
    <div className=" flex sticky top-0 text-gray-300 z-10 bg-[#004B8F]">
      <div className="">
        <img src={img1} alt="" className=" w-[70px] h-[70px]" />
      </div>
      <nav className=" grid   flex-1 p-2  content-center justify-end ">
        <ul className=" flex   text-sm font-medium gap-10  px-5">
          {
            links.map(link=><li key={link.name}>
                <NavLink to={link.path}>{link.name}</NavLink>
            </li>)
          }
        </ul>
      </nav>
    </div>
  );
}
