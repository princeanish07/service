import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
 
  return (
    <div className="grid place-content-center p-1">
      <div className="flex gap-5 w-[70Vw] p-1 bg-white ">
        <div className="flex  w-[25Vw] flex-col gap-4">
          <div className="  flex place-content-center  p-1 ">
            <img
              className="w-[260px] h-[260px] border-2 border-[rgba(0,0,0,.3)] rounded-full"
              src={logo}
              alt=""
            />
          </div>
          <div className=" grid grid-cols-1 p-5">
            <ul className="flex flex-col gap-6">
              <li className=" grid grid-cols-6">
                <i>
                  <FaHome className=" text-[1.5em] text-blue-600" />
                </i>
                <p className="col-span-5 break-words">
                  {" "}
                  Nayabazar, Gaindakot-3, Nawalpur
                </p>
              </li>

              <li className=" grid grid-cols-6">
                <i>
                  <FaPhoneAlt className=" text-[1.5em] text-blue-600" />
                </i>
                <p className="col-span-5 break-words"> +977 9847646906</p>
              </li>
              <li className="grid grid-cols-6">
                <i>
                  <FaEnvelope className=" text-[1.5em] text-blue-600" />
                </i>
                <p className="break-words col-span-5">
                  bipinbjhgjhghjgjhjbjbnmnmknm,nkunwar23@gmail.com
                </p>
              </li>
              <li>
                <button className="bg-blue-600 p-2  text-white w-full"
                onClick={()=>{
                  navigate('create');
                }}
                >
                  Edit Profile
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-4   box-border gap-4">
          <div className=" mt-20">
            <h2 className=" text-indigo-600  font-semibold text-2xl">
              BIPIN KUNWAR
            </h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium facere dolor doloremque odit quam nobis tenetur, rerum
              minus distinctio architecto! Harum iusto ad impedit quaerat libero
              repellat? Ea, sapiente ullam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nisi maxime laboriosam, omnis, ea
              eveniet, magnam fugiat fugit aliquam ipsum quas praesentium
              molestiae dignissimos corrupti soluta quisquam. Accusamus, dolorem
              repellendus. Distinctio!
            </p>
          </div>
          {/* <div>
            <h2 className="bg-gray-400 p-3">Services Offers</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
