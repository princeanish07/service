import React from 'react'
import {useGetAllCatservicesQuery} from "../../category/catServiceApi"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setServiceId} from "./catServiceSlice"
const categoryAll = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {data:services,isLoading}=useGetAllCatservicesQuery();
    if(isLoading){
        return <div>Loading All</div>
    }
  return (
    <div className='grid grid-cols-2 auto-rows-min gap-4 p-2'>
        {
            services && services.map((service)=>{
                return <div key={service.id} className='flex flex-col gap-2 p-10 text-[1.2em] bg-white shadow hover:cursor-pointer'
                onClick={()=>{
                    dispatch(setServiceId(service.id));
                    navigate(`/user/service/${service?.name}/setup`)
                }}
                >
                    <p className='text-[1.5em] font-medium'>{service.name}</p>
                    <p>{service.description}</p>
                </div>
            })
        }

    </div>
  )
}

export default categoryAll