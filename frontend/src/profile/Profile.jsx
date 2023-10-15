import React, { useState } from "react";
import logo from "../images/logo.png";
import Edit from './edit'
function Profile() {
  const [basic, setBasic] = useState(true);
  const [qualification, setQualification] = useState(false);
  return (
    <>
      <div className="grid grid-cols-3 gap-1 p-1 overflow-auto h-[90Vh] ">
        <div className="  p-10 box-border shadow border-2 shadow-gray-400">
          <div
            className=" w-[300px] h-[300px] rounded-full border-2 border-[rgba(0,0,0,.3)]  "
            onClick={() => {
              document.getElementById("image").click();
              showImage(true);
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
             
            />
          </div>

          <div className="mt-5">
            <ul className=" flex flex-col gap-1">
              <li className=" text-xl text-center mb-4">
                Bipin Kunwar
              </li>
              <li className=" bg-[rgba(0,0,0,.1)] p-2">Edit Profile</li>
              <li className=" bg-[rgba(0,0,0,.1)] p-2">Edit Qualification</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
              <Edit/>
        </div>
      </div>
    </>
  );
}

export default Profile;
