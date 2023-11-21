import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setServiceId} from "./cat-Service/catServiceSlice";

export default function Service({ services }) {
  console.log(services);
  const navigate = useNavigate();
  const [serviceId, setserviceId] = useState();
const dispatch=useDispatch()
  return (
    <section className="grid  text-gray-300   text-[1em] gap-4 p-20 ">
      {services.map((service, index) => (
      
            <div
              key={service?.csid}
              className=" p-10  box-border  shadow grid grid-cols-1    bg-white text-gray-600"
            >
              <div className=" flex flex-col gap-1">
                <p className="font-semibold font-sans text-[1.3em] bg-blue-500 text-white p-2">
                  {service.name}
                </p>
                <table  className="table-auto  " cellSpacing={5}  cellPadding={10} >
                  <thead  >
                    <tr className="bg-gray-600 text-white "  >
                      <th>Location</th>
                      <th>Days</th>
                      <th>Time</th>
                      <th>Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-600 text-white">
                      <td>{service?.location}</td>
                      <td>{service?.days}</td>
                      <td>{`${service?.time?.start}-${service?.time?.end}`}</td>
                      <td>{`${service?.charge?.min}-${service?.charge?.max}`}</td>
                    </tr>
                  </tbody>
                </table>
                {
                  serviceId === service?.csid ?(
                    <div>

                <div className="bg-gray-200 p-4">
                  <p>
                    {service?.offers}
                  </p>
                </div>
                <div className="bg-gray-200 p-4">
                  {
                    service?.experience ? <p>

                      {service?.experience}
                    </p>: <p>No Experience</p>
                  }
                 
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src={`http://localhost:8000/${service?.image}`} className="h-[300px] w-full object-cover" alt="" />
                </div>
                </div>


                  ):null
                }
              
                <div className="flex gap-5">
                  <button
                    className="bg-orange-600 text-white w-[200px] p-2"
                    onClick={() => {
                      setserviceId(!serviceId?service?.csid:(serviceId && serviceId!==service?.csid?service?.csid:null));
                    }}
                  >
                    {
                      serviceId === service?.csid ? 'View Less' : 'View More'
                    }
                  </button>
                <button
                  type="button"
                  className="font-bold font-sans text-[1em] bg-green-600 p-2 w-[200px]  text-white"
                  onClick={()=>{
                     dispatch(setServiceId(service?.csid))
                     navigate(`/user/service/${service?.name}/setup`) 
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="font-bold font-sans text-[1em] bg-blue-600 p-2 w-[200px]  text-white"
                >
                  Delete
                </button>
                </div>
              </div>
          
            </div>
       
      ))}
    </section>
  );
}
