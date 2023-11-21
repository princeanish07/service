import React from 'react'
import { useGetCategoryServicesQuery } from './cardApi'
import Card from './card';
import { useSelector } from 'react-redux';
export const CardId = () => {
  const clicked=useSelector((state)=>state.cardSlice.clicked)
  const selectedCatg =
  Object.keys(clicked?.child).length != 0
  ? clicked?.child
  : Object.keys(clicked?.subparent).length != 0
  ? clicked?.subparent
  : clicked?.parent;
  const {data:cards,isLoading,isError,error}=useGetCategoryServicesQuery(selectedCatg?.id);
  if(isLoading){
    return <div>Loading...</div>
  }
  if (isError) {
   return <div>{error}</div> 
  }
return (
<Card cards={cards}/>
)
 
}
