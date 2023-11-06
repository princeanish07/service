import React, { useState } from "react";
import {useForm,Controller} from 'react-hook-form'

export default function Services({register}) {
  const {handleSubmit}=useForm()
  const services = [
    {
      id: 1,
      name: "This is service 1 ",
    },
    {
      id: 2,
      name: "This is service 1 ",
    },
    {
      id: 3,
      name: "This is service 1 ",
    },
    {
      id: 4,
      name: "This is service 1 ",
    },
    {
      id: 5,
      name: "This is service 1 ",
    },
    {
      id: 6,
      name: "This is service 1 ",
    },
    {
      id: 7,
      name: "This is service 1 ",
    },
  ];
  const [show, setShwow] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  const [serviceList,setServiceList]=useState([])

  return (
      <div className=" grid grid-cols-1 activity ">
        {services.map((service,index) => (
          <div
            key={service.id}
            className=" p-1 bg-white border-2 border-gray-200 flex gap-3  shadow-md text-[1.1em] "
          >
            <div className="p-1"> 
                <input type="checkbox" className="hover:cursor-pointer" value={service.id} {...register(`activities.${index}.id`)} id={service.id} 
                onChange={()=>{
                    if(!serviceList.includes(service.id))
                    {
                    setServiceList([...serviceList,service.id])

                    }
                    else{
                    setServiceList((previousArray)=>{
                        return previousArray.filter(item=>item!==service.id)
                    })
                }
                    
                }}
                />
            </div>
            <div className="grid grid-cols-1 flex-1  ">

            <div
           
              className=" service-label flex "
            >
              <label className="text-[1em] hover:cursor-pointer flex-1 hover:bg-gray-300 p-1 font-medium" htmlFor={service.id}>{service.name}</label>
            </div>
            {
                serviceList.includes(service.id) &&
            <div
              className="grid grid-cols-2 gap-2"
              
              
            >
              <div className="flex gap-4 bg-gray-500 p-3 ">
                <div className="flex flex-col">
                  <label htmlFor="" className=" text-white">Minimun Price</label>
                  <input type="number" {...register(`activities.${index}.max`)} />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-white">Maximum Price</label>
                  <input type="number"  {...register(`activities.${index}.min`)} />
                </div>
              </div>

              <div className=" p-2 px-5 bg-[rgba(0,0,0,0.8)] grid grid-cols-2 gap-2" >
                <div className=" flex flex-col">
                  <label htmlFor="">Price Type</label>
                  <select  id="" {...register(`activities.${index}.type`)} >
                    <option value="One Time Cost">One Time Cost</option>
                    <option value="Hpurly">Hourly</option>

                    <option value="Daily">Daily</option>

                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" >Duration</label>
                  <input type="number"  {...register(`activities.${index}.duration`)} />
                </div>
              </div>
            </div>
}
            </div>

          </div>
        ))}
      </div>
  );
}
