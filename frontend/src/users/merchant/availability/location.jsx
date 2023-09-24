import React, { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState(false);
  return (
    <div className="bg-gray-100 p-5"> 
      <div className="grid grid-cols-2 gap-5"> 
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-[1.1em]">
            District
          </label>

            <input type="text" className="flex-1 p-2 focus:outline-none shadow-md shadow-gray-300 border"/>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-[1.1em]">
            Muncipility
          </label>

            <input type="text" className="flex-1 p-2 focus:outline-none shadow-md shadow-gray-300 border" />
        </div>
      </div>
    </div>
  );
}
