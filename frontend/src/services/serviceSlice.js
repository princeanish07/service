import { createSlice } from "@reduxjs/toolkit";
const initialState={
    allRefetch:null,
    categoryRefetch:null
}

export const serviceSlice=createSlice({
    name:"serviceSlice",
    initialState,
    reducers:{
        setAllRefetch:((state,actions)=>{
            state.allRefetch=actions.payload
        }),
        setCategoryRefetch:((state,actions)=>{
            state.categoryRefetch =actions.payload
        }),
    }
})
export const {setAllRefetch,setCategoryRefetch}=serviceSlice.actions;
export default serviceSlice.reducer;