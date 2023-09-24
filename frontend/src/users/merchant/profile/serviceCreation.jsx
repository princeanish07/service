import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useViewCategoryServicesQuery } from "../../User/buyer/reducer/catservices";
import { categoryService } from "./redux/profileslice";
import { currentState } from "./redux/profileslice";
export default function ServiceCreation() {
  // const services = useSelector((state) => state.profile.services.services);
  const catservices = useSelector((state) => state.profile.categoryService);

  const currentCount = useSelector((state) => state.profile.currentState);
  console.log(currentCount);
  // console.log(catservices);

  const [id, setId] = useState(services[0]);
  const location = useLocation();

  const [count, setCount] = useState(0);
  useEffect(() => {
    setId(services[currentCount]);
  }, [currentCount]);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useViewCategoryServicesQuery(id);
  const dispatch = useDispatch();
  const onSubmit = (value) => {
    console.log(value);
    dispatch(categoryService(value));
    // setCount((prevCount)=>prevCount+1)
    dispatch(currentState(value));

    navigate("/profile/service/scope", {
      state: {
        path: location.pathname,
      },
    });
  };
  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-full p-1 grid place-content-center text-gray-300 ">
      <div className=" grid grid-cols-1 p-5 w-[50Vw] bg-[#004B8F]">
        <div className="">
          <h2 className=" text-2xl">Profile Setup-Service Details</h2>
          <p>Step 4 of 7</p>
        </div>
        <div className=" grid grid-cols-1">
          <ul className="text-sm  flex gap-2 text-center">
            <li>Category:</li>
            <li>
              House Commercial <span>-</span>
            </li>
            <li>Plumbing-</li>
            <li>Reparing</li>
          </ul>
        </div>{" "}
        <br />
        <div>
          <ul className=" flex gap-2">
            <li>Service:</li>
            <li>{data.name}</li>
          </ul>
        </div>
        <div className=" grid place-content-end">
          <button className="p-1 bg-fuchsia-600">Add New</button>
        </div>
        <form
          action=""
          className=" grid grid-cols-1 gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col">
            <span>Service Description</span>
            <p>{data.description}</p>
          </div>
          <div>
            <input type="text" value={id} {...register("serviceId")} hidden />
          </div>
          <table className=" w-[80%] ">
            <thead>
              <tr>
                <th className=" text-left">Days</th>
                <th colSpan={2}>TIme</th>
              </tr>
              <tr>
                <th></th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>

            <tbody className=" ">
              <tr className="   ">
                <td className=" ">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Sunday
                  </label>
                </td>
                <td className="text-center  space-x-2">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2    "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2  "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Monday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2    "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2  "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Tuesday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2   "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Wednesday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Thursday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2    "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Friday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2  "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Saturday
                  </label>
                </td>
                <td className="text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>

                <td className=" text-center">
                  <input
                    type="time"
                    className="text-sm focus:outline-none bg-[#004B8F] border-b-white border-b-2 "
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" flex flex-col ">
            <label htmlFor="" className=" ">
              {" "}
              Unavailability Selection
            </label>
            <input type="date" className=" w-[50%]" />
          </div>

          <table className=" w-2/3">
            <thead>
              <tr>
                <th className=" text-left">Price Structure</th>
                <th colSpan={2} className=" text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" ">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Hourly
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    type="text"
                    className="w-full focus:outline-none  bg-[#004B8F] border-b-white border-b-2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Daily
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[#004B8F] border-b-white border-b-2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    One Time Cost{" "}
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[#004B8F] border-b-white border-b-2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Subscrtipton Fee
                  </label>
                </td>
                <td colSpan={2}>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[#004B8F] border-b-white border-b-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" flex flex-col">
            <label htmlFor="">Work Place</label>
            <div className=" grid grid-cols-2 grid-rows-1 gap-2">
              <div className=" flex flex-col">
                <label htmlFor="">District</label>
                <input type="text" className=" p-1" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Muncipility</label>
                <input type="text" className="p-1" />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="">Ward No</label>
                <input type="text" className="p-1" />
              </div>
              <div className=" flex flex-col">
                <label htmlFor=""> Tole/Chowk</label>
                <input type="text" className="p-1" />
              </div>
            </div>
          </div>
          <div>
            <p>Service Picture</p>
            <div>
              <img src="" alt="" className=" bg-white h-[200px]" />
            </div>
            <input type="file" className="mt-1" />
          </div>
          <div className="  ">
            <button
              className=" disabled:opacity-30"
              type="submit"
              disabled={services && currentCount >= services.length - 1}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
