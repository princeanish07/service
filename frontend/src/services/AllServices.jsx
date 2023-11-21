import React from 'react'
import Service from './service';
import {useGetAllProviderServicesQuery} from "./serviceApi"
const AllServices = () => {
    const userId=localStorage.getItem('userId');
    const {data:services,isError,isLoading}=useGetAllProviderServicesQuery(userId)
    console.log(services);
    if(isLoading){
        return <div className='text-gray-200 p-10'>Loading...</div>
    }
  return (
    <Service services={services}/>
  )
    
    
  
}

export default AllServices