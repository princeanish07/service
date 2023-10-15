import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "../landing/authentication/redux/userSlice";
import { userApi } from "../landing/authentication/redux/userSlice";
import { categoryApi } from '../landing/users/service/redux/categorySlice';
import { serviceApi } from "../landing/users/service/redux/serviceSlice";
import profileReducer from '../landing/users/service/redux/profileslice'
import { catserviceApi } from "../landing/users/service/redux/catservices";
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
