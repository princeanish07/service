import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../authentication/AuthSlice";
import { ProfileApi } from "../profile/ProfileApi";
import { categoryApi } from "../category/categoryApi";
import { serviceApi } from "../services/serviceApi";
import {cardApi} from '../home/cardApi'
import categorySliceReducer from '../category/categorySlice'
import catServiceSliceReducer from "../services/cat-Service/catServiceSlice";
import cardSliceReducer from "../home/cardSlice";
import { catServiceAPi } from "../category/catServiceApi";
import serviceSliceReducer from "../services/serviceSlice";
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
  catServiceAPi.middleware,
  cardApi.middleware
);
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [catServiceAPi.reducerPath]:catServiceAPi.reducer,
    [cardApi.reducerPath]:cardApi.reducer,
    categorySlice:categorySliceReducer,
    catServiceSlice:catServiceSliceReducer,
    cardSlice:cardSliceReducer,
    serviceSlice:serviceSliceReducer
  },

  middleware
 
});
