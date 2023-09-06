import React, { useState, useEffect } from "react";

export default function Availability() {
  const weeks = [
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
  const [Time, setTime] = useState([]);
  console.log(Time);

  useEffect(() => {
    const arrayTime = [];
    let index = 8;
    let count = 0;
    do {
      arrayTime.push(index);
      index++;
      count++;
      if (index > 12) {
        index = 1;
      }
    } while (count != 10);

    console.log("hello");
    setTime(arrayTime);
  }, []);
  const [show,setShow]=useState([])

  return (
    <div>
      <div className="bg-gray-400 p-5 text-gray-800">
        <div className="">
          <ul className="grid gap-5 grid-cols-3">
            <li className="p-2 bg-white">Emergency 24/7 Available</li>
            <li className="p-2 bg-white">Office Time 10Am-5Pm</li>

            <li className="p-2 bg-white">Customize Time</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="bg-white p-5 flex flex-col">
          <div className="">
            <ul className="grid  grid-cols-8 bg-gray-300 ">
              <li className="font-medium shadow-md border border-white p-2 text-center">Time</li>
              {weeks.map((week) => (
                <li key={week.day} className="font-medium shadow-md border text-[0.9em] border-white p-2 text-center ">
                  {week.day}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            {Time.map((time, index) => (
              <div key={index} className="grid grid-cols-8 text-sm   ">
                <ul className="grid col-span-8 grid-cols-8 ">
                <li className="text-center flex place-content-center shadow-md border border-white py-2 bg-gray-300">
                <span>  {`${time}:00`}</span>
                </li>
                  {weeks.map((week) => (
                    <li key={week.day} className=" bg-white shadow-md border border-gray-300 py-2 hover:cursor-pointer"></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
