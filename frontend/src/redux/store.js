import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../authentication/AuthSlice";
import { ProfileApi } from "../profile/ProfileApi";
import { categoryApi } from "../category/categoryApi";
import { serviceApi } from "../landing/users/service/redux/serviceSlice";
import categorySliceReducer from '../category/categorySlice'
import { catserviceApi } from "../landing/users/service/redux/catservices";
const middleware = getDefaultMiddleware({
  serializableCheck:{
    ignoreActions:['profile/basicDetails'],
    ignoredPaths: ['profile.basic.profile'],
  }
}).concat(
  authApi.middleware,
  ProfileApi.middleware,
  categoryApi.middleware,  
  serviceApi.middleware,
  catserviceApi.middleware,
);
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [catserviceApi.reducerPath]:catserviceApi.reducer,
    categorySlice:categorySliceReducer,
  },

  middleware
 
});
