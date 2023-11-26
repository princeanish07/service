import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./Api/AuthSlice";
import { subCategoryApi } from "./Api/subCategoryApi";
import { ProfileApi } from "./Api/ProfileApi";
import { categoryApi } from "./Api/categoryApi";
import { serviceApi } from "./Api/serviceApi";
import {cardApi} from './Api/cardApi'
import categorySliceReducer from './redux/categorySlice'
import catServiceSliceReducer from "./redux/catServiceSlice";
import cardSliceReducer from "./redux/cardSlice";
import { catServiceAPi } from "./Api/catServiceApi";
import serviceSliceReducer from "./redux/serviceSlice";
import RouteSliceReducer from "./redux/RouteSlice";
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
  cardApi.middleware,
  subCategoryApi.middleware
);
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [catServiceAPi.reducerPath]:catServiceAPi.reducer,
    [cardApi.reducerPath]:cardApi.reducer,
    [subCategoryApi.reducerPath]:subCategoryApi.reducer,
    categorySlice:categorySliceReducer,
    catServiceSlice:catServiceSliceReducer,
    cardSlice:cardSliceReducer,
    serviceSlice:serviceSliceReducer,
    routeSlice:RouteSliceReducer
  },

  middleware
 
});
