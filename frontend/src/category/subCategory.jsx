import React from 'react'
import {useForm} from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import {useAddSubCategoryMutation,useViewCategoryQuery} from './categoryApi'
const subCategory = ({selectedCatg}) => {
const {refetch}=useViewCategoryQuery()

  console.log('selected',selectedCatg);
  const location=useLocation();
  const [addSubCategory,{data,isLoading,isError,error}]=useAddSubCategoryMutation()
    const {register,control,handleSubmit,reset}=useForm();
    const submitForm= async(values)=>{
      await addSubCategory({...values,id:selectedCatg.id})
      .unwrap()
      .then((response)=>{
        reset()
        refetch()
        navigate(`${location.state.path}`, {replace:true})
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
     }
     if(isLoading){
      return <div>Saving</div>
     }
     if(isError){
      return <div>{error}</div>
     }
  
    
  return (
    <div className="form">
    <form action="" onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="">SubCategory Name</label>
        <input type="text" {...register("name")} 
        />
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
  )
}

export default subCategory