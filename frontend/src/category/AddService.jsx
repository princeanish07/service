import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {useAddCatServicesMutation} from './catServiceApi'
const AddService = ({ selectedCatg }) => {
  console.log('services',selectedCatg.id);
  const [addService, { data, isLoading, isError,error }] =
    useAddCatServicesMutation();
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues:{
      service:[{
        name:'',
        description:'',
        keywords:'',
        category_id:selectedCatg?.id
      }]
    }
  });
  const { fields,append,remove } = useFieldArray({
   name:'service',
   control
  });
  const submitForm = async ({service}) => {
    console.log(service);
    await addService(service)
      .unwrap()
      .then((response) => {
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isLoading) {
    return <div>Saving</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <div className="">
      <form action="" onSubmit={handleSubmit(submitForm)} className=" grid " >
        <div className="grid gap-10">

          {fields.map((field, index) => {
            return (
              <div key={field.id} className="service w-[40Vw]">
                
                <div>
                  <label htmlFor="">Service Name</label>
                  <input type="text" {...register(`service.${index}.name`)} />
                </div>
                <div>
                  <label htmlFor="">Description</label>
                  <textarea
                    {...register(`service.${index}.description`)}
                    id=""
                    rows={5}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="">Key Words</label>
                  <input type="text" {...register(`service.${index}.keywords`)} />
                </div>
                {
                  index>0 &&
                <div>
                  <button type="button"  className="bg-blue-600 text-white p-2" onClick={()=>remove(index)}>Remove</button>
                </div>
                }
              </div>
            );
          })}
        </div>


        <div className="flex justify-between">
          <button className="bg-blue-600 text-white p-2" type="button" onClick={()=>append({
            name:'',
            description:'',
            keywords:'',
            category_id:selectedCatg?.id
          })}>
            Add More
          </button>
          <button className="bg-blue-600 text-white p-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
