import React from "react";
import { useNavigate } from 'react-router-dom';
export default function Qualification() {
  const navigate=useNavigate()
  return (
    <div className="  justify-center  grid p-5 ">
      <form
        action=""
        className=" qualification gap-2 grid grid-cols-1  p-5 xs:w-screen sm:w-[70Vw] md:w-[60Vw] lg:w-[60Vw] text-gray-700 "
        encType="multipart/form-data"
      >
      
        <div className=" flex flex-col">
          <p>Skills</p>
          <div>
            <div className="grid gap-2 grid-cols-1">
              <p>Name</p>
              <input type="text" className="p-1 place-self-start bg-[] " />
              <p>Description</p>
              <textarea name="" id=""></textarea>
              <button className="bg-[rgba(0,0,0,.3)] justify-self-center p-1 px-4">
                Add More
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <p>Training</p>
          <div className="gap-2 grid grid-cols-2 grid-rows-2">
            <div>
              <label htmlFor="">Training On</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Institute</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Certificate</label>
              <input type="file" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <p>Experience</p>
          <div className="gap-2 grid grid-cols-2 grid-rows-2">
            <div>
              <label htmlFor="">Roles</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Institute</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Duration</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Cetificate</label>
              <input type="file" />
            </div>
          </div>
          <div className=" grid grid-cols-1">
            <label htmlFor="">Details</label>
            <textarea type="text" />
          </div>
        </div>

        <div className=" flex flex-col">
          <p>Expertise/Specialist</p>
          <div className="gap-2 grid grid-cols-2 grid-rows-2">
            <div>
              <label htmlFor="">Experts On</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Work Experience</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Researches</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Cetificate</label>
              <input type="file" />
            </div>
          </div>
          <div>
            <label htmlFor="">License As</label>
            <input type="text" />
            <label htmlFor="">Working License/Id</label>
            <input type="file" />
          </div>
          <div>
           <div className=" grid grid-cols-2  gap-2">
           <div>
           <label htmlFor="">Nationality</label>
            <input type="text" />
           </div>
            <div>
            <label htmlFor="">Citizenship No</label>
            <input type="text" />
            </div>
           </div>
            <label htmlFor="">Citizenship</label>
            <input type="file" />
          </div>
          <div className=" flex justify-between ">
            <button className="  px-14 py-1" onClick={()=>navigate('/profile/service/scope')}>
              Previous
            </button>

            <button className="  px-14 py-1" onClick={()=>navigate('/profile/portfolio')}>Skip</button>
          </div>
        </div>
      </form>
    </div>
  );
}
