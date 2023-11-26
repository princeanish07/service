import React from 'react'
import {useGetAllCatservicesQuery} from "../Api/catServiceApi"
import ServiceCard from './serviceCard';
const AllSevice = () => {
    const {
        data: cards,
        isError: serviceIsError,
        isLoading: cardsLoading,
        error: serviceError,
      } = useGetAllCatservicesQuery();
    
      if(cardsLoading){
        return <div>Loading...</div>
      }
  return (
    <ServiceCard cards={cards}/>
  )
}

export default AllSevice