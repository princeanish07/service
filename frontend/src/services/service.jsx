import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setServiceId} from "../redux/catServiceSlice";
import {useDeleteServicesMutation} from "../Api/serviceApi";
export default function Service({ services }) {
  console.log(services);
  const navigate = useNavigate();
  const [serviceId, setserviceId] = useState();
  const [deleteService,{data,isLoading}]=useDeleteServicesMutation();
  const providerId=localStorage.getItem('userId');
const dispatch=useDispatch()
if(isLoading){
  return <div>Deleteing..</div>
}
  return (
    <section className="grid  text-gray-300   text-[1em] gap-4 p-20 ">
      {services.map((service, index) => (
      
            <div
              key={service?.id}
              className=" p-10  box-border  shadow grid grid-cols-1    bg-white text-gray-600"
            >
              <div className=" flex flex-col gap-1">
                <p className="font-semibold font-sans text-[1.3em] bg-blue-500 text-white p-2">
                  {service.name}
                </p>
                <table  className="table-fixed  " cellSpacing={5}  cellPadding={10} >
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
                      <td className="text-center">{service?.pivot?.location}</td>
                      <td className="text-center ">{
                        service?.pivot?.days.map(day=><span className="mr-2" key={day}>{day}</span>)
                      }</td>
                      <td className="text-center">{`${service?.pivot?.time?.start}-${service?.pivot?.time?.end}`}</td>
                      <td className="text-center">{`${service?.pivot?.charge?.min}-${service?.pivot?.charge?.max}`}</td>
                    </tr>
                  </tbody>
                </table>
                {
                  serviceId === service?.id ?(
                    <div className="flex flex-col gap-1">
                      <div className="">
                  {
                    service?.pivot?.description ? <p className="bg-gray-200 p-4">

                      {service?.pivot?.description}
                    </p>:null
                  }
                 
                </div>

                <div className="bg-gray-200 p-4">
                  <p>
                    {service?.pivot?.offers}
                  </p>
                </div>
                <div className="b">
                  {
                    service?.pivot?.expereince ? <p className="bg-gray-200 p-4">

                      {service?.pivot?.expereince}
                    </p>:null
                  }
                 
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src={`http://localhost:8000/${service?.pivot?.image}`} className="h-[300px] w-full object-cover" alt="" />
                </div>
                </div>


                  ):null
                }
              
                <div className="flex gap-5">
                  <button
                    className="bg-orange-600 text-white w-[200px] p-2"
                    onClick={() => {
                      setserviceId(!serviceId?service?.id:(serviceId && serviceId!==service?.id?service?.id:null));
                    }}
                  >
                    {
                      serviceId === service?.id ? 'View Less' : 'View More'
                    }
                  </button>
                <button
                  type="button"
                  className="font-bold font-sans text-[1em] bg-green-600 p-2 w-[200px]  text-white"
                  onClick={()=>{
                     dispatch(setServiceId(service?.id))
                     navigate(`/user/service/${service?.name}/setup`) 
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="font-bold font-sans text-[1em] bg-blue-600 p-2 w-[200px]  text-white"
                  onClick={async()=>{
                   await deleteService({serviceId:service?.id,providerId});
                   
                 }}
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
