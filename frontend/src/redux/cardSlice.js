import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
   
    category:{},
    subcategory:{},
    cardId:'',
    provider:{
        id:'',
        category:''
    }
}

export const cardSlice=createSlice({
name:'cardSlice',
initialState,
reducers:{
    setCategory:((state,actions)=>{
        state.category=actions.payload
    }),
    setSubCategory:((state,actions)=>{
        state.subcategory=actions.payload
    }),
    setServiceId:((state,actions)=>{
        state.cardId=actions.payload
    }),
    setProviderId:((state,actions)=>{
        state.provider=actions.payload
    })
}
})
export const {setCategory,setSubCategory, setServiceId,setProviderId}=cardSlice.actions
export default cardSlice.reducer