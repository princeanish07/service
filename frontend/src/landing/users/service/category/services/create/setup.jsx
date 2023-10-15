import React, { useState } from "react";
import Time from "./availability/time";
import { useParams, useNavigate } from "react-router-dom";
import Charge from "./price/charge";
import {
  useGetCatServiceByIdQuery,
  useGetOtherCatserviceQuery,
} from "../../../redux/catservices";
import { useForm, Controller } from "react-hook-form";
export default function SeviceSetup() {
  const { id } = useParams();
  const { data: service, isLoading, isError } = useGetCatServiceByIdQuery(id);
  const { data: others, isLoading: ohterLoading } =
    useGetOtherCatserviceQuery(id);
  const navigate = useNavigate();
  const { register, control, handleSubmit, setValue }=useForm({
    defaultValues:{
      description:'',
      experience:'',
      address:{
        district:'',
        mun:'',
        ward:'',
        chowk:''
      },
      offers:'No offers are available',
    }
  })
  const [preview,setPreview]=useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };
  if (isLoading || ohterLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="lg:p-10 md:p-5 sm:p-2 xs:p-1 grid grid-cols-4 gap-2 text-[1em] text-slate-500 box-border overflow-auto h-[90Vh]">
      <section className=" col-span-2 px-10">
         
          <div className="flex justify-end">
            <button
              className="w-[200px] text-center bg-blue-600 p-2 text-white"
              onClick={() =>
                navigate(`/seller/category/${service.category_id}`, {
                  replace: true,
                })
              }
            >
              Goto Category
            </button>
        </div>
        <form
          action=""
          className="   grid grid-cols-1 gap-1 font-medium text-[1.1em] service  mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" ">
            <span className="text-[1em]]">Service Name</span>
            <p className="flex-1 font-medium text-[1.2em] bg-gray-200 p-2">
              {service.name}
            </p>
            <input type="text" hidden={true} value={service.id} {...register("id")} />
          </div>

          <div className=" ">
            <label htmlFor="">Service Description</label>
            <textarea
             
              cols="50"
              rows="5"
              className="placeholder:text-[1em]  p-2 bg-gray-200 focus:outline-none "
              placeholder="Your Service Description"
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Work Place/ Location</label>
            
        <div className="location flex gap-2 flex-col">
        
          <div className="">
            <label htmlFor="">District</label>
            <input type="text" {...register('address.district')} />
          </div>
          <div className="">
            <label htmlFor="">Muncipility</label>
            <input type="text" {...register('address.mun')}/>
          </div>
          <div className="">
            <label htmlFor="">Ward No</label>
            <input type="text" {...register('address.ward')} />
          </div>
          <div className="">
            <label htmlFor="">Tole/Chowk</label>
            <input type="text" {...register('address.chowk')} />
          </div>
        </div>
          </div>
          <Time
            register={register}
            Controller={Controller}
            control={control}
            setValue={setValue}
          />

          <Charge register={register}
            Controller={Controller}
            control={control}
            setValue={setValue}/>
          
              

          <div className="flex flex-col">
            <label htmlFor="">Special Offers & Discounts</label>
            <input type="text" className="bg-gray-200 p-2" {...register('offers')} />
          </div>
          <div className="  flex flex-col">
            <label htmlFor=""> Work Experience</label>
            <textarea
              name=""
              id=""
              cols="50"
              rows="5"
              className="placeholder:text-[1em]  p-2 bg-gray-200 focus:outline-none "
              placeholder="Your work experience"
              {...register("experience")}
            ></textarea>
          </div>

          <div className="">
            <label htmlFor="">Share Images</label>
            <div className="grid   p-1 bg-gray-200">
              {

                preview? <img src={URL.createObjectURL(preview)} className=" object-cover w-full h-[300px] object-top " alt="" />:<p className="text-[1em]">No Images are selected</p>

              }
            </div>
            <div>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register('image')}
              onChange={(e) => {
                setPreview(e.target.files[0]);
                console.log(e.target.files[0]);
                
              }}
            />
          </div>
          </div>

          <div>
            <button type="submit" className=" p-2 bg-blue-600 text-white px-10">
              SUBMIT
            </button>
          </div>
        </form>
      </section>
      <section className="  ">
        <p className="mb-2 bg-orange-600 p-2 text-white font-medium">
          Other Services
        </p>

        <ul className="    flex flex-col  text-[0.95em]">
          {others
            .filter((item) => item.id != id)
            .map((other) => (
              <li
                key={other.id}
                className=" bg-white border border-gray-300 p-2 hover:bg-gray-300 "
                onClick={() =>
                  navigate(`/seller/category/service/${other.id}`, {
                    replace: true,
                  })
                }
              >
                {other.name}
              </li>
            ))}
        </ul>
      </section>
      <section>
        <div className="flex flex-col">
          <label htmlFor="">Feecback</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Rate Services</label>
          *******
        </div>
      </section>
    </div>
  );
}
