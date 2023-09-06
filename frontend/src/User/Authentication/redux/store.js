import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "./userSlice";
import { userApi } from "./userSlice";
import { categoryApi } from './../../buyer/reducer/categorySlice';
import { serviceApi } from "../../buyer/reducer/serviceSlice";
import profileReducer from '../../seller/profile/redux/profileslice'
import { catserviceApi } from "../../buyer/reducer/catservices";
const middleware = getDefaultMiddleware({
  serializableCheck:{
    ignoreActions:['profile/basicDetails'],
    ignoredPaths: ['profile.basic.profile'],
  }
}).concat(
  userApi.middleware,
  categoryApi.middleware,  
  serviceApi.middleware,
  catserviceApi.middleware,
  rtkQueryErrorLogger
);
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [catserviceApi.reducerPath]:catserviceApi.reducer,
    profile:profileReducer,
  },

  middleware
 
});
