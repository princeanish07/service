import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const cardApi = createApi({
  reducerPath: "cards",
 

baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/api/services/',
prepareHeaders:(headers)=>{
    // headers.set('Content-Type','multipart/form-data')
    headers.set('Accept','application/json')
    headers.set('Authorize',localStorage.getItem('token'))
    return headers
  }}),
endpoints:(builder)=>({
    getAllServices:builder.query({
        query:()=>'providers'
    }),
    getCategoryServices:builder.query({
      query:(id)=>`/category/${id}`
    }),
    getProviderDetails:builder.query({
      query:(id)=>`provider/details/${id}`
    })
  
})
 
});
export const {
 useGetAllServicesQuery,
 useGetCategoryServicesQuery,
 useGetProviderDetailsQuery
} = cardApi;
