import { createSlice } from "@reduxjs/toolkit";
const initialState={
   category:{}

}

export const categorySlice=createSlice({
name:"categorySlice",
initialState,
reducers:{

   viewCategory:(state,action)=>{
        state.category=action.payload;
   },

    // setSubcategory:(state,action)=>{
    //     state.subcategory=action.payload;
    // },
    // setServices:(state,action)=>{
    //     state.services.push(action.payload)
    // },
   
    // categoryService:(state,action)=>{
        
    //     state.categoryService.push(action.payload)

    // },
    // saveCategory:(state,action)=>{
    //     state.saveCategory=action.payload
    // }
    

}

})
export const {viewCategory}=categorySlice.actions
export default categorySlice.reducer 