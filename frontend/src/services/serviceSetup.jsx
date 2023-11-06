import React from "react";
import Services from "./services";
import Time from "./time";
import { useParams,useNavigate } from "react-router-dom";
import { useGetCatServiceByIdQuery, useGetOtherCatserviceQuery } from "./catservices";
import {useForm,Controller} from 'react-hook-form'
export default function ServiceSetup() {
  const {id}=useParams()
  const {data:service,isLoading,isError}=useGetCatServiceByIdQuery(id)
  const {data:others,isLoading:ohterLoading}=useGetOtherCatserviceQuery(id)
  const navigate=useNavigate()
  const form=useForm({
    defaultValues:{
      description:'Hello',
      activities:[{id:"",max:"",min:"",type:"",duration:""}],
      days:[]
    }
  });
  const {register,control,getFieldState,handleSubmit }=form
  const onSubmit=(data)=>{
     data.activities=data.activities.filter((item)=>item.id!=false)
    console.log(data);
  }
  if(isLoading || ohterLoading){
    return <div>Loading...</div>
  }
  return (
    <div className=" p-5 grid grid-cols-4 gap-2 text-[1em] text-slate-600">
      <section className=" col-span-3">
        <form action="" className="  p-2 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex ">
            <p className="flex-1 font-medium text-[1.5em]">
            {service.name}
            </p>
        <p className="w-[200px] text-center bg-blue-600 p-2 text-white" onClick={()=>navigate(`/seller/category/${service.category_id}`,{replace:true})}>Goto Category</p>

          </div>
          <Services register={register}  />
          <Time register={register} Controller={Controller} control={control}/>
          
 
          <div className=" flex gap-5">
            <div className=" flex-1 flex flex-col">
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                className="placeholder:text-[3em] placeholder:text-center p-2 focus:outline-none "
                placeholder="Your Service Description"
                {...register('description')}
              ></textarea>
            </div>
            <div className=" flex-1">
              <div className="grid place-content-center h-[200px]  bg-white">
                {/* <img src="" alt="" srcset="" /> */}
                <p className="text-[2em]">Add Images</p>
              </div>
              {/* <input type="file" /> */}
            </div>
          </div>
          {/* <Availability/> */}

          {/* <Price/> */}
          <div>
           <button type="submit" className=" p-2 bg-blue-600 text-white px-10">SUBMIT</button>
          </div>
        </form>
      </section>
      <section className="    p-2 shadow-md ">
        <p className="mb-2 bg-orange-600 p-2 text-white font-medium">Other Services</p>
        
        <ul className="    flex flex-col  text-[0.95em]">
         {
          others.filter((item)=>item.id!=id).map((other)=><li key={other.id} className=" bg-white border border-gray-300 p-2 hover:bg-gray-300 "
          onClick={()=>
            navigate(`/seller/category/service/${other.id}`,{replace:true})
          
          }
          >{other.name}</li>)
         }
        </ul>
      </section>
    </div>
  );
}
