import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../authentication/AuthSlice";
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
  authApi.middleware,
  categoryApi.middleware,  
  serviceApi.middleware,
  catserviceApi.middleware,
);
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [catserviceApi.reducerPath]:catserviceApi.reducer,
  },

  middleware
 
});
