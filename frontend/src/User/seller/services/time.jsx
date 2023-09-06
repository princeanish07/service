import React, { useState, useEffect } from "react";

export default function Time({ register, Controller, control }) {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("Emergency 24 hours");
  const [days, setDays] = useState([]);
  console.log(days);

  const weeks = [
    {
      day: "All",
    },
    {
      day: "SUN",
    },
    {
      day: "MON",
    },
    {
      day: "TUE",
    },
    {
      day: "WED",
    },
    {
      day: "THU",
    },
    {
      day: "FRI",
    },
    {
      day: "SAT",
    },
  ];

  const Time = [
    {
      type: "Emergency 24 hours",
    },
    {
      type: "Office Time(10AM-5PM ",
    },
    {
      type: "Customize Time",
    },
  ];

  useEffect(() => {
    setDays(weeks);
  }, []);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (value === "All") {
      let tempvalue = days.map((day) => ({ ...day, ischecked: checked }));
      setDays(tempvalue);
    } else {

      let tempvalue = days.map((day) =>
       ( day.day === value ? { ...day, ischecked: checked }  : day && 

       day.day==='All'?( days.filter((item) => item?.ischecked !== true).length < 1?{ ...day, ischecked: false }:days.filter((item) => item?.ischecked === true).length===6?{ ...day, ischecked: true }:{...day,ischecked:false}):day
      
      ))
      console.log( days.filter((item) => item?.ischecked === true).length)

      setDays(tempvalue);
    }
  };
  return (
    <div className=" grid grid-cols-1 p-5 box-border gap-5 bg-white ">
      <div className="  text-gray-800 ">
        <div className="">
          <ul className="grid gap-5 grid-cols-3">
            {Time.map((time) => (
              <li
                key={time.type}
                className={
                  color && color === time.type
                    ? "bg-blue-600 text-white p-2"
                    : "bg-gray-200 shadow-slate-500 p-2"
                }
                onClick={() => {
                  setColor(time.type);
                  if (time.type === "Customize Time") {
                    setShow(true);
                  } else {
                    setShow(false);
                  }
                }}
              >
                {time.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {show && (
        <div className="grid grid-cols-2 gap-10 ">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[1.1em] font-medium">
              Start Time
            </label>
            <input
              type="time"
              placeholder="Start TIme"
              className="p-1.5 shadow-md border-2 border-gray-200 "
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[1.1em] font-medium ">
              End Time
            </label>
            <input
              type="time"
              className="p-1.5 shadow-md border-2 border-gray-200 "
            />
          </div>
        </div>
      )}

      <div className="bg-white  ">
        <ul className=" grid grid-cols-8">
          {/* <li className=" flex gap-3 ">
            <input
              type="checkbox"
              id="All"
              onChange={handleChange}
              value="All"
              checked={
                days.filter((item) => item?.ischecked !== true).length < 1
              }
              className="hover:cursor-pointer"
            />
            <label htmlFor="All" className=" hover:cursor-pointer">
              All Days
            </label>
          </li> */}

         
              <ul className="flex gap-4">
                {days.map((day) => (
                  <li className="flex gap-4" key={day.day}>
                    <input
                      type="checkbox"
                      value={day.day}
                      checked={day?.ischecked || false}
                      {...register('days')}
                      onChange={handleChange}
                      id={day.day}
                    />
                    <label htmlFor={day.day}>{day.day}</label>
                  </li>
                ))}
              </ul>
         

          {/* {days.map((day) => {
           return <li key={day.day}>
              <ul className=" flex gap-3 ">
                <li>
                  <input
                    type="checkbox"
                    id={day.day}
                    
                    value={day.day}
                    className="hover:cursor-pointer"
                    
                    checked={day?.ischecked ||false}
                    {...register('days')}
                    onChange={handleChange}
                    
             
                  />
                </li>
                <li className="text-[0.95em] font-medium ">
                  <label htmlFor={day.day} className="hover:cursor-pointer">{day.day}</label>
                </li>
              </ul>
            </li>
})} */}
        </ul>
      </div>
    </div>
  );
}
