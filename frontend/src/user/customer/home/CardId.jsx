import React from 'react'
import { useGetAllServicesQuery } from "../../../Api/cardApi";
import { useGetSubCategoryByIdQuery } from "../../../Api/subCategoryApi";
import { useSelector } from 'react-redux';
import CardSection from '../../../components/cardSection';
export const CardId = () => {
  const selected = useSelector((state) => state.cardSlice.category);
  const {
    data: subcategories,
    isLoading
  } =  useGetSubCategoryByIdQuery(selected?.id);
  const {
    data: cards,
    isError: serviceIsError,
    isLoading: cardsLoading,
    error: serviceError,
  } = useGetAllServicesQuery();
  if(isLoading || cardsLoading){
    return <div>Loading...</div>
  }
  
  return <CardSection subcategories={subcategories} cards={cards}/>;

 
}
