import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const categoryApi=createApi({
    reducerPath:"category",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/api/category/'}),
    endpoints:(builder)=>({
        viewCategory:builder.query({
            query:()=>'view'
        }),
       getCategoryService:builder.query({
        query:(id)=>`service/${id}`
       }),
       addCategory:builder.mutation({
       query:(category)=>({
        url:"/create",
        method:"POST",
        body:category
       })
       })
    }),
  
   
})
export const{useViewCategoryQuery,useGetCategoryServiceQuery,useAddCategoryMutation}=categoryApi
  