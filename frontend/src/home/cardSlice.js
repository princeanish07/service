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
    cardId:''
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
    })
}
})
export const {setOnClick,setOnOver,setServiceId}=cardSlice.actions
export default cardSlice.reducer