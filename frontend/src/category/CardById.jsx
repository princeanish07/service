import React, { useEffect } from 'react'
import {useGetAllCatservicesQuery} from "../Api/catServiceApi"
import { useGetSubCategoryByIdQuery } from "../Api/subCategoryApi";
import { useSelector } from 'react-redux';
import CardSection from './cardSection';
import { useNavigate } from 'react-router-dom';
export const CardId = () => {
  const selected = useSelector((state) => state.categorySlice.category);
  const navigate=useNavigate();
  useEffect(()=>{
   !selected?.id && navigate("/user/category/", {replace:true})
  },[selected])
  const {
    data: subcategories,
    isLoading
  } =  useGetSubCategoryByIdQuery(selected?.id);
  const {
    data: cards,
    isError: serviceIsError,
    isLoading: cardsLoading,
    error: serviceError,
  } = useGetAllCatservicesQuery();
  if(isLoading || cardsLoading){
    return <div>Loading...</div>
  }

  return <CardSection subcategories={subcategories} cards={cards}/>
  


 
}
