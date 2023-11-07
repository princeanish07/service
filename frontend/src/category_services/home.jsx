import React from "react";
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="grid grid-cols-3 gap-1 p-1 overflow-auto h-[90Vh] ">
      <div className="  p-10 box-border shadow border-2 shadow-gray-400">
        <div
          className=" w-[300px] h-[300px] rounded-full border-2 border-[rgba(0,0,0,.3)]  "
          onClick={() => {
            document.getElementById("image").click();
          }}
        >
          <img
            className="h-full w-full rounded-full"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <input
            type="file"
            id="image"
            className=" hidden"
            accept="image/*"
            onChange={(e) => {
              setPreviewImage(e.target.files[0]);
            }}
          />
        </div>

        <div className="mt-5">
          <ul className=" flex flex-col gap-1">
            <li className=" text-xl text-center mb-4">Bipin Kunwar</li>
            <li className=" bg-[rgba(0,0,0,.1)] p-2">Edit Profile</li>
            <li className=" bg-[rgba(0,0,0,.1)] p-2">Edit Qualification</li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 shadow flex flex-col ">
        <div className="flex  gap-4  text-slate-800 shadow border p-1">
          <div className=" flex    flex-1 rounded-sm ">
            <div className=" flex-1">
              <input
                type="text"
                name=""
                id=""
                className="  flex-1 p w-full p-2 text-gray-800 bg-gray-200 focus:outline-none rounded-sm text-sm"
                placeholder="Search Your Services"
              />
            </div>
            <div className="  px-5 p-2 grid place-content-center bg-[#0118E6] rounded-sm">
              <button>
                <FaSearch className=" text-gray-300" />
              </button>
            </div>
          </div>
          <div className="flex justify-between px-2 w-[30Vw] gap-2 text-[.9em] ">
            <div className="">
              <select name="" id="" className=" p-2 w-[100px] shadow font-medium">
                <option value="">Type</option>
              </select>
            </div>
            <div className="w-[150px] ">
              <button className="bg-blue-600 w-full text-white p-2 "
              onClick={()=>{
                navigate('category')
              }}
              >Create New</button>
            </div>
          </div>
        </div>
        <div className="flex-1 grid place-content-center ">
          <h2>No services has found </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
