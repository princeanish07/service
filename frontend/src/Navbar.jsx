import React, { useEffect, useState } from "react";
import img2 from "./images/Technician.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "./redux/RouteSlice";

export default function Naavbar() {
  const logged = localStorage.getItem("logged");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [dropdown, setdropdown] = useState("");
  const customers = [
    {
      id: 1,
      link: "View Services",
      to: "/customer",
    },
    {
      id: 1,
      link: "My Orders",
      to: "/",
    },
    {
      id: 1,
      link: "Notifications",
      to: "/",
    },
    {
      id: 1,
      link: "Know More",
      to: "/",
    },
  ];

  const providers = [
    {
      id: 1,
      link: "Manage Services",
      to: "/provider",
    },
    {
      id: 1,
      link: "My Services",
      to: "/provider/services",
    },
    {
      id: 1,
      link: "Received Orders",
      to: "/",
    },
    {
      id: 1,
      link: "Notification",
      to: "/",
    },
  ];

  const profiles = [
    {
      id: 1,
      link: "Profile",
      to: "/user/profile",
    },
    {
      id: 1,
      link: "Sign Out",
      to: "/provider/services",
    },
  ];
  return (
    <>
      <nav className="flex sticky top-0 p-6 tracking-widest z-10 bg-[#004840] border-b-2 border-gray-400 ">
        <div className="  flex ">
          <p className="text-[1.3em] text-[#EF351B] font-bold">
            SERVICE MARKET PLACE
          </p>
        </div>
        <div className="flex-1 flex  text-[0.9em] ">
          <ul
            className="text-white flex-1 flex justify-evenly ml-5  mr-[14Vw] font-semibold  "
            onMouseLeave={() => {
              setdropdown("");
            }}
          >
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                setdropdown("customer");
              }}
            >
              FindAService
              {logged && dropdown === "customer" && (
                <ul className="text-white flex flex-col w-[180px] font-bold absolute top-7 left-1  bg-black">
                  {customers.map((customer) => (
                    <li
                      key={customer?.id}
                      className="text-white border-b-2 p-3 hover:bg-red-700 border-gray-400"
                    >
                      <NavLink to={customer.to} className="">
                        {" "}
                        {customer.link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                setdropdown("provider");
              }}
            >
              Provider Hub
              {logged && dropdown === "provider" && (
                <ul className="text-white flex flex-col w-[180px]   font-bold absolute top-7 left-1  bg-black">
                  {providers.map((provider) => (
                    <li
                      key={provider?.id}
                      className="text-white border-b-2 p-3 hover:bg-red-700 border-gray-400"
                    >
                      <NavLink to={provider.to} className="">
                        {" "}
                        {provider.link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <NavLink>About Us </NavLink>
            </li>
            <li>
              <NavLink>How It Works</NavLink>
            </li>
          </ul>
        </div>
        {!logged ? (
          <div>
            <NavLink
              className="bg-gray-800 p-2 m-5 px-4  rounded-full text-white "
              to="signIn"
            >
              Sign In
            </NavLink>
            <NavLink
              className="bg-gray-800 p-2 px-4 m-5  rounded-full text-white "
              to="register"
            >
              Sign Up
            </NavLink>
          </div>
        ) : (
          <div
            onMouseEnter={() => {
              setdropdown("profile");
            }}
            onMouseLeave={() => {
              setdropdown("");
            }}
            className=" relative"
          >
            <img
              src={img2}
              alt=""
              className="rounded-full border h-[30px] w-[30px]"
            />
            {dropdown === "profile" && (
              <ul className="text-white flex flex-col w-[200px]  font-bold absolute top-8 right-0  bg-black">
                <li className="text-white border-b-2 p-3 hover:bg-red-700 border-gray-400">
                  <NavLink to="user/profile">Profile</NavLink>
                </li>
                <li className="text-white border-b-2 p-2 hover:bg-red-700 border-gray-400">
                  <NavLink
                    onClick={() => {
                      const value = confirm(
                        "Are you sure tha you want to log out form this session"
                      );
                      if (value) {
                        localStorage.removeItem("logged");
                        localStorage.removeItem("userId");
                        navigate("/", { replace: true });
                      }
                    }}
                  >
                    Sign Out
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
