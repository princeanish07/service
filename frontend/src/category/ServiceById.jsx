import React from 'react'
import {useGetCatServiceByIdQuery} from "../Api/catServiceApi"
import { useSelector } from 'react-redux';
import ServiceCard from './serviceCard';
const ServiceById = () => {
    const selected=useSelector((state)=>state.categorySlice.subcategory)
    const {
        data: cards,
        isError: serviceIsError,
        isLoading: cardsLoading,
        error: serviceError,
      } = useGetCatServiceByIdQuery(selected?.id);
    
      if(cardsLoading){
        return <div>Loading...</div>
      }
      console.log('service',cards);
  return (
    <ServiceCard cards={cards}/>
  )
}

export default ServiceById