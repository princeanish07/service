import { createSlice } from "@reduxjs/toolkit";
const initialState={
   category:{},
   subcategoryFirst:{},
   subcategorySecond:{},
   selectedCategory:{
    parent:{},
    subparent:{},
    child:{},
   },
   path:'',
   count:0,
   

}

export const categorySlice=createSlice({
name:"categorySlice",
initialState,
reducers:{

   viewCategory:(state,action)=>{
        state.category=action.payload;
   },

    setSubcategoryFirst:(state,action)=>{
        state.subcategoryFirst=action.payload;
    },
    setSubcategorySecond:(state,action)=>{
        state.subcategorySecond=action.payload;
    },
    setPath:(state,action)=>{
        state.path=action.payload
    },
   
    // setServices:(state,action)=>{
    //     state.services.push(action.payload)
    // },
   
    // categoryService:(state,action)=>{
        
    //     state.categoryService.push(action.payload)

    // },
    // saveCategory:(state,action)=>{
    //     state.saveCategory=action.payload
    // }
    setSelectedCategory:((state,action)=>{
        state.selectedCategory=action.payload
    })
    

}

})
export const {viewCategory,setSubcategoryFirst,setSubcategorySecond,setSelectedCategory,setPath}=categorySlice.actions
export default categorySlice.reducer 