import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "./userSlice";
import { userApi } from "./userSlice";
import { categoryApi } from '../users/merchant/redux/categorySlice';
import { serviceApi } from "../users/merchant/redux/serviceSlice";
import profileReducer from '../users/merchant/redux/profileslice'
import { catserviceApi } from "../users/merchant/redux/catservices";
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
