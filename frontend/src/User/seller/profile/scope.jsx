import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Scope() {
  const location=useLocation()
  // const services=useSelector((state)=>state.profile.services.services)
  
  const navigate=useNavigate()
  return (
    <div className=" scope grid place-content-center ">
      <form
        action=""
        className=" w-[50Vw] text-white text-sm  gap-1  grid grid-cols-1 p-5  bg-[#004B8F]"
      >
        <div className="">
          <h2 className=" text-2xl">Profile Setup-Service's Scopes</h2>
          <p>Step 5 out of 7</p>
        </div>
        <div className=" grid grid-cols-1">
          <label htmlFor="">Deliverable</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Time Frame</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Resources</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Limitation</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Activities</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Service Area</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor=""> Support & Maintenence</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Client Rsponsibilites</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
       
        <div className=" flex flex-col">
          <label htmlFor="">Refund Policy</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Pricing</label>
          <div className="ml-2">
          <label htmlFor="" className=" flex ">
            1.
            <input type="text" />
          </label>
          <label htmlFor="">
            2.
            <input type="text" />
          </label>
          <label htmlFor="">
            3.
            <input type="text" />
          </label>
          <label htmlFor="">
            4.
            <input type="text" />
          </label>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Payment Method</label>
          <input type="text" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Additional Charge</label>
          <input type="text" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Serivice Gurantee</label>
          <input type="text" />
        </div>
      
        <div className=" flex justify-between ">
            <button className="  px-14 py-1" onClick={()=>navigate('/profile/service/create')}>
              Previous
            </button>

            <button className="  px-14 py-1" type="button" onClick={()=>navigate(location.state?.path)}>Next</button>
          </div> 
          <div>
            <button >Proceed</button>
          </div>
      </form>
    </div>
  );
}
