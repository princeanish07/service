import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useViewCategoryServicesQuery } from "../buyer/reducer/catservices";
import { categoryService } from "./profile/redux/profileslice";
import { currentState } from "./profile/redux/profileslice";
import { FaSearch } from "react-icons/fa";

export default function Service() {
  const services = useSelector((state) => state.profile.services);
  const navigate = useNavigate();
  console.log(services);

  return (
    <div className=" bg-[#FCF9FE] mt-2 text-gray-300  grid grid-cols-1 text-[0.9em]">
      <section className="grid grid-cols-5 gap-2 ">
        <div className="">
          <ul className=" box-border grid grid-cols-1 gap-1 ">
            <li className="p-2 bg-red-600 ">SERVICES</li>
            {services &&
              services.map((service) => {
                return (
                  <li
                    key={service.id}
                    className="p-2 hover:cursor-pointer flex hover:bg-gray-200  hover:text-gray-700"
                    onClick={() => {
                      navigate(`${service.id}`);
                    }}
                  >
                    {service.service}
                  </li>
                );
              })}
          </ul>
        </div>
        
        <div className=" box-border gap-3 col-span-3 col-start-2 row-start-1 flex-1 h-[88.8Vh] flex flex-col   ">
            <div className=" ">
              <button className=" w-[200px] text-center bg-red-600 p-2"> Share Information</button>
            </div>
          <div className="overflow-y-auto hide-scrollbar scrolling-touch  ">
            <Outlet />
          </div>
        </div>
        <div className=" grid justify-center  ">
          <div>
            <p className=" text-[1.1em] text-center mb-5">
              Categories Selected
            </p>
            <ul className=" grid grid-cols-1 gap-4">
              <li>Plumbing</li>
              <li>Painting</li>
              <li>Repiring</li>
              <li>Electrician</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
