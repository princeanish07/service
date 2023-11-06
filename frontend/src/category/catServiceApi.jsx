import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
 export const catServiceAPi=createApi({
   reducerPath:"catService",
   baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/api/catservices/" }),
   endpoints:(build=>({
    addCatServices:build.mutation({
        query:((service)=>({
            url:'create',
            method:'post',
            body:service,
        }))
    })
   }))
 })
 export const {useAddCatServicesMutation}=catServiceAPi;