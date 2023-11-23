import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    hovered:{
        parent:{},
        subparent:{},
        child:{}
    },
    clicked:{
        parent:{
            name:"All",
            category:''
        },
        subparent:{},
        child:{}
    },
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
    setOnOver:((state,actions)=>{
        state.hovered=actions.payload
    }),
    setOnClick:((state,actions)=>{
        state.clicked=actions.payload
    }),
    setServiceId:((state,actions)=>{
        state.cardId=actions.payload
    }),
    setProviderId:((state,actions)=>{
        state.provider=actions.payload
    })
}
})
export const {setOnClick,setOnOver,setServiceId,setProviderId}=cardSlice.actions
export default cardSlice.reducer