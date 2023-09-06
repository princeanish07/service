import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const categoryApi=createApi({
    reducerPath:"category",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/api/category'}),
    endpoints:(builder)=>({
        viewCategory:builder.query({
            query:()=>'view'
        }),
       getCategoryService:builder.query({
        query:(id)=>`service/${id}`
       })
    }),
  
   
})
export const{useViewCategoryQuery,useGetCategoryServiceQuery}=categoryApi
  