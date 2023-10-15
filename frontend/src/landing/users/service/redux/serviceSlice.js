import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const serviceApi=createApi({
    reducerPath:'service',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/api/services/'}),
    endpoints:(builder)=>({
        getAllServices:builder.query({
            query:()=>'providers'
        }),
      
    })
})
export const {useGetAllServicesQuery}=serviceApi