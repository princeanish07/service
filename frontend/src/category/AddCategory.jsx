import React from "react";
import {useForm} from 'react-hook-form'
import { useNavigate, useLocation } from "react-router-dom";
import { useAddCategoryMutation } from "./categoryApi";
export const AddCategory = () => {
  const navigate= useNavigate();
  const location = useLocation();
  const {register,control,handleSubmit}=useForm();
  const [addCategory,{isLoading,isError,error}]=useAddCategoryMutation();
 const submitForm= async(values)=>{
  await addCategory(values)
  .unwrap()
  .then((response)=>{
    navigate(`${location.state.path}`, {replace:true})
    console.log(response);
    navigate
  })
  .catch((error)=>{
    console.log(error);
  })
console.log(values);
 }
 if(isLoading){
  return <div>Saving</div>
 }
 if(isError){
  return <div>{error.status}</div>
 }
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="">Category Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea {...register("description")} id="" rows={5}></textarea>
        </div>
        <div>
          <label htmlFor="">Key Words</label>
         <input type="text" {...register('keywords')}/>
        </div>
        <div>
          <button className="bg-blue-600 text-white p-2" type="submit">Save Category</button>
        </div>
      
    
      </form>
    </div>
  );
};
