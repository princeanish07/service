import React from "react";

export default function ScopeInput({ field, label }) {
  switch (field) {
    case "textarea":
      return (
        <div className="grid grid-cols-1 gap-1 text-[0.85em]">
          <label htmlFor="" className=" font-medium">
            {label}
          </label>
            <textarea
              name=""
              id=""
              cols=""
              rows="3"
              className="bg-white shadow-md flex-1 p-1"
            ></textarea>
        </div>
      );
    case "input":
      return (
        <div className=" grid grid-cols-1 gap-1 text-[0.85em]  ">
          <label htmlFor="" className=" font-medium">
            {label}
          </label>
          <div className=" flex gap-10 ">
            <input type="text" className="bg-white shadow-md flex-1 p-1 focus:outline-none focus:bg-gray-200" />
            {
              label==='Resources' || label==='Activities'?(

            <div className="flex gap-2 ">
              <button className="bg-gray-300 px-2 shadow">+</button>
              <button className="bg-gray-300 px-2 shadow">-</button>
            </div>
              ):null
            }
          </div>
        </div>
      );
    default:
      return null;
  }
}
