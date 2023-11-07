import { createSlice } from "@reduxjs/toolkit";
export const CatServiceSlice=createSlice({
    initialState:{
        selected:{
            parent:'',
            subparent:'',
            child:''
        }
    },
    reducers:{
        saveCategoryId:(state,action)=>{
            
        }
    },
})