import { createSlice } from "@reduxjs/toolkit";
const initialState={
route:{
    customer:false,
    provider:false
}

}

export const RouteSlice=createSlice({
    name:"RouteSlice",
    initialState,
    reducers:{
       
      setRoute:((state,actions)=>{
            state.route=actions.payload;
        })
    }
})
export const {setRoute}=RouteSlice.actions;
export default RouteSlice.reducer;