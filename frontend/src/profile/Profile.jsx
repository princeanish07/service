import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "./redux/userSlice";
import Edit from "../Auth/edit/editUser";

const Profile = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("userId");
  const { data, isLoading } = useGetUserByIdQuery(id);
  return (
    <>
    <div className=" grid grid-cols-3  profile mx-auto w-[100%] ">
      <div className=" border  bg-[#2A3166] bg-opacity-80 shadow-lg grid grid-cols-1 place-content-start w-full ">
      <div className=" w-[200px] h-[200px]  mx-auto mb-10 p-5 grid place-content-center  ">
          <img
            src=""
        
            className=" border border-gray-600 w-[200px] h-[200px] rounded-full   bg-gray-300  "
          />
      <div>
        <span>BG</span>
      </div>
        </div>
        <div className="border-t-4">
        <ul className=" grid grid-cols-1 p-2 navbar gap-1">
          <li><button>Add Profile Picture</button></li>
            <li><button>Account Information</button></li>
            <li><button>Password</button></li>
            <li><button>Security</button></li>
            <li><button onClick={()=>{
              navigate('/login',{replace:true})
              localStorage.removeItem("logged");
            }}>Log Out</button></li>
              
          </ul>
        </div>
      </div>
      <div className="  col-span-2 border-2">
     <Edit/>
      </div>
    </div>
      
    </>
  );
};

export default Profile;
