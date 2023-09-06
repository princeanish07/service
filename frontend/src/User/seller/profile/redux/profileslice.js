import { createSlice } from "@reduxjs/toolkit";
const initialState={
   basic:{},
   subcategory:[],
   services:[],
   currentState:0,
   categoryService:[],
   saveCategory:{}
}

export const profileSlice=createSlice({
name:"profile",
initialState,
reducers:{
    basicDetails:(state,action)=>{
        state.basic=action.payload
    },
    setSubcategory:(state,action)=>{
        state.subcategory=action.payload;
    },
    setServices:(state,action)=>{
        state.services.push(action.payload)
    },
    currentState:(state)=>{
        state.currentState+=1
    },
    categoryService:(state,action)=>{
        
        state.categoryService.push(action.payload)

    },
    saveCategory:(state,action)=>{
        state.saveCategory=action.payload
    }
    

}

})
export const {basicDetails,setSubcategory,setServices,currentState,categoryService,saveCategory}=profileSlice.actions
export default profileSlice.reducer 