import React from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
    const navigate=useNavigate()
  return (
    <div className=" grid justify-center h-[80Vh] overflow-auto p-5 ">
      <form
        action=""
        className=" qualification gap-2 grid grid-cols-1  p-5 xs:w-screen sm:w-[70Vw] md:w-[60Vw] lg:w-[60Vw] text-[#004B8F] bg-white"
        encType="multipart/form-data"
      >
        <div className="">
          <h2 className=" text-2xl">Profile Setup-Portfolio</h2>
          <p>Step 7 out of 7</p>
        </div>
        <div>
            <p>Previous Project</p>
            <div>
                <label htmlFor="">Project Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Associated Company</label>
                <input type="text" />
            </div>
            <div>
            <label htmlFor="">Profession/Roles</label>
                <input type="text" />
            </div>
            <div className="grid grid-cols-1"> 
                <label htmlFor=""> Work Experience/Activites</label>
                <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div>
                <label htmlFor="">Duration</label>
                <input type="text" />
            
            </div>
            <div>
                <label htmlFor="">Working Certificate</label>
                <input type="file" />
            </div>
            <div className=" grid gap-2">
                <label htmlFor="">Gallery</label>
                <div className="border-2 border-gray-400">
                    <img src="" alt=""  className="h-[200px]"/>
                </div>
                <input type="file" />           
            </div>
        </div>
        <div>
            <p>Recent Projects</p>
            <div>
                <label htmlFor="">Project Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Associated Company</label>
                <input type="text" />
            </div>
            <div>
            <label htmlFor="">Profession/Roles</label>
                <input type="text" />
            </div>
            <div className="grid grid-cols-1"> 
                <label htmlFor=""> Work Experience/Activites</label>
                <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div>
                <label htmlFor="">Duration</label>
                <input type="text" />
            
            </div>
            <div>
                <label htmlFor="">Working Certificate/Id</label>
                <input type="file" />
            </div>
            <div>
                <label htmlFor="">Gallery</label>
                <div className="border-2 border-gray-400">
                    <img src="" alt=""  className="h-[200px]"/>
                </div>
                <input type="file" />           
            </div>
        </div>
        <div className=" flex justify-between ">
            <button className="  px-14 py-1" onClick={()=>navigate('/profile/qualification')}>
              Previous
            </button>

            <button className="  px-14 py-1" onClick={()=>navigate('/profile/basic')}>Skip</button>
          </div>
      </form>
    </div>
  ); 
}
