import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import img1 from "../../images/providers.png";
import img2 from "../../images/Plumber.png";

import img3 from "../../images/providers2.png";

import img4 from "../../images/Technician.png";

import { useViewCategoryServicesQuery } from "../buyer/reducer/catservices";
import ScopeInput from "./ScopeInput";
function ServiceId() {
  const { id } = useParams();
  const [Time, setTime] = useState([
    {
      TimeIN: 9,
      TimeOut: 10,
      period: "AM",
    },
  ]);

  useEffect(() => {
    for (let index = 0; index < 4; index++) {
      setTime((prevTime) => {
        const length = prevTime.length;
        const updatedTime = {
          TimeIN:
            prevTime[length - 1].TimeOut != 1
              ? prevTime[length - 1].TimeIN + 1
              : 1,
          TimeOut:
            prevTime[length - 1].TimeIN != 11
              ? prevTime[length - 1].TimeOut + 1
              : 1,
          period:
            prevTime[length - 1].TimeOut >= 10 &&
            prevTime[length - 1].TimeOut < 12
              ? "AM"
              : "PM",
        };

        return [...prevTime, updatedTime];
      });
    }

    console.log("hello");
  }, []);
  console.log(Time);

  const location = useLocation();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useViewCategoryServicesQuery(id);
  const onSubmit = (value) => {
    console.log(value);
    // setCount((prevCount)=>prevCount+1)

    navigate("/profile/service/scope", {
      state: {
        path: location.pathname,
      },
    });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const weeks = [
    {
      day: "Sunday",
    },
    {
      day: "Monday",
    },
    {
      day: "Tuesday",
    },
    {
      day: "Wednesday",
    },
    {
      day: "Thursday",
    },
    {
      day: "Friday",
    },
    {
      day: "Saturday",
    },
  ];
  const prices = [
    {
      price: "Hourly",
    },
    {
      price: "Daily",
    },
    {
      price: "One Time Cost",
    },
    {
      price: "Subscription Fee",
    },
  ];
  let morinng = 8;
  const scopes = [
    {
      name: "Description of Services",
      type: "text",
      field: "textarea",
    },
    {
      name: "Images of Services",
      type: "text",
      field: "input",
    },
    {
      name: "Deliverable and Outcomes",
      type: "text",
      field: "input",
    },
    {
      name: "Limitation of Services",
      type: "text",
      field: "input",
    },
    {
      name: "Expected Duration to Complete Services",
      type: "text",
      field: "input",
    },
    {
      name: "Additional Charge on Extra Works",
      type: "text",
      field: "input",
    },
    {
      name: "Gurantee & Warenty Provided ",
      type: "text",
      field: "input",
    },
    {
      name: "Payment Method ",
      type: "text",
      field: "input",
    },
    {
      name: "Refund Policy on Disatisfaction Of Customers",
      type: "text",
      field: "input",
    },
    {
      name: "Resources Required to perform services",
      type: "text",
      field: "input",
    },
    {
      name: "Activities Doing During Service Providing TIme",
      type: "text",
      field: "input",
    },
    {
      name: "Support & Maintenence",
      type: "text",
      field: "textarea",
    },
  ];

  return (
    <div className=" grid grid-cols-6 py-10 box-border pl-32 pr-2 gap-20  text-slate-600 bg-gray-100  text-[1.1em] ">
      <section className="col-span-4 grid grid-cols-1 gap-4 overflow-auto h-screen  hide-scrollbar scrolling-touch ">
        <div className=" grid grid-cols-1  text-[1.3rem] gap-2 ">
          {/* <ul className=" flex gap-2  font-medium text-center">
          <li>
            House Commercial-
          </li>
          <li>Plumbing-</li>
          <li>Reparing</li>
        </ul> */}

          <ul className=" flex  text-[1.7rem] font-medium">
            <li>{data.name}</li>
          </ul>
        </div>{" "}
        <div className=" flex flex-col bg-white shadow p-10 box-border">
          <p className="text-gray-700 ml-2">
            {data.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora cum inventore, quas ratione qui ea rerum
            unde necessitatibus nostrum sequi odio nobis laborum enim officiis
            distinctio excepturi provident eveniet. Eos! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Vero natus quibusdam corrupti hic
            eveniet? Alias explicabo, sunt sit, placeat iste error dolores, eos
            fugit ullam dolore dolor maxime quia delectus. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Quaerat odio odit est aliquid
            eligendi temporibus? Fuga repudiandae dolorum quisquam tempore ab
            consectetur enim officia reprehenderit, pariatur hic aspernatur nemo
            iusto.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white  shadow ">
            <img
              src={img1}
              alt=""
              className="h-[200px] w-full object-contain"
            />
          </div>
          <div className="bg-white  shadow ">
            <img
              src={img2}
              alt=""
              className="h-[200px] w-full object-contain"
            />
          </div>
          <div className="bg-white  shadow ">
            <img
              src={img3}
              alt=""
              className="h-[200px] w-full object-contain"
            />
          </div>
          <div className="bg-white  shadow ">
            <img
              src={img4}
              alt=""
              className="h-[200px] w-full object-contain"
            />
          </div>
          <div className=" flex justify-end">
            <button>view more</button>
          </div>
        </div>
        <form
          action=""
          className=" grid grid-cols-1 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input type="text" value={id} {...register("serviceId")} hidden />
          </div>

          {/*        
        <div>
          <p>Select Availability</p>
          <ul className=" flex gap-5">
            <li>
              <label htmlFor="">
                <input type="checkbox" />
                Office Time
              </label>
            </li>
            <li>
              <label htmlFor="">
                <input type="checkbox" />
                Emergency
              </label>
            </li>
            <li>
              <label htmlFor="">
                <input type="checkbox" />
                Night Time
              </label>
            </li>
          </ul>

          <div className="grid grid-cols-8 ">
            <p>Time</p>
            <ul className="grid col-span-7 grid-cols-7">
              {weeks.map((week) => (
                <li>{week.day}</li>
              ))}
            </ul>
          </div>
          {
            Time.map((time, index) => (
              <div key={index} className="grid grid-cols-8 text-sm ">
                <p>
                  {`${time.TimeIN}:00-${time.TimeOut}:00 `} <span>{time.period}</span>
                </p>
                <ul className="grid col-span-7 grid-cols-7">
                  {weeks.map((week) => (
                    <li>
                      <input type="checkbox" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          <p>Available Days</p>
          <ul className=" flex gap-5">
            <li>
              <label htmlFor="">
                <input type="checkbox" />
                All Days
              </label>
            </li>
            <li>
              <button className=" text-red-600 font-medium">Select Days</button>
            </li>
          </ul>
        </div> */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="">Minimum Charge</label>
            <input
              type="text"
              className="  bg-white  shadow-gray-300 shadow focus:outline-none p-1"
            />
          </div>

          <div className=" flex flex-col ">
            <div className=" grid grid-cols-2 grid-rows-2  gap-3">
              <div className=" flex flex-col">
                <label htmlFor=" ">District</label>
                <input
                  type="text"
                  className=" p-1 bg-white  shadow-gray-300 shadow"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Muncipility</label>
                <input
                  type="text"
                  className="p-1 bg-white  shadow-gray-300 shadow"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="">Ward No</label>
                <input
                  type="text"
                  className="p-1 bg-white  shadow-gray-300 shadow"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor=""> Tole/Chowk</label>
                <input
                  type="text"
                  className="p-1 bg-white  shadow-gray-300 shadow"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            {scopes.map((scope) => {
              return <ScopeInput field={scope.field} label={scope.name} />;
            })}
          </div>
          <div>
            <span>Scope of Services</span>
            <ul className=" grid grid-cols-3 gap-2 auto-rows-min text-center scope">
              {scopes.map((scope) => (
                <li key={scope.name}>{scope.name}</li>
              ))}
            </ul>
          </div>

          <div className="scope text-white text-sm  gap-1  grid grid-cols-1  ">
            <div className=" flex justify-end text-lg text-blue-600 font-semibold ">
              <button
                className="  px-14 py-1"
                onClick={() => navigate("/profile/service/create")}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="   col-span-2 p-2 shadow-md ">
        <p className="mb-2 font-medium">Other Services</p>
        <ul className="    flex flex-col gap-5  text-[0.95em]">
          <li className="">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
          <li className=" ">Pipe Fiiting service IN home available</li>
        </ul>
      </section>
    </div>
  );
}

export default ServiceId;
