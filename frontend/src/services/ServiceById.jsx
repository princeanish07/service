import React, { useEffect } from 'react'
import Service from './service';
import { useSelector,useDispatch } from 'react-redux';
import {useGetProviderServiceByCategoryQuery} from "../Api/serviceApi"
export const ServiceById = () => {
  const dispatch=useDispatch();
    const {parent,subparent,child}=useSelector((state)=>state.cardSlice.clicked)
    const selectedCatg =
    Object.keys(child).length != 0
    ? child
    : Object.keys(subparent).length != 0
    ? subparent
    : parent;
    console.log(selectedCatg);

    const userId=localStorage.getItem('userId');
    const {data:services,isError,isLoading}=useGetProviderServiceByCategoryQuery({providerId:userId,categoryId:selectedCatg?.id})
    console.log(services);
    if(isLoading){
      return <div className='text-gray-200 p-10'>Loading...</div>
    }
    return (
      <Service services={services} />
      
      )
    }
    
    