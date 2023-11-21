import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const catServiceAPi = createApi({
  reducerPath: "catService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/catservices/",
    prepareHeaders:(headers)=>{
      // headers.set('Content-Type','multipart/form-data')
      headers.set('Accept','application/json')
      headers.set('Authorize',localStorage.getItem('token'))
      return headers
    }
  }),
  endpoints: (build) => ({
    addCatServices: build.mutation({
      query: (service) => ({
        url: "create",
        method: "post",
        body: service,
      }),
    }),
    viewCategoryServices: build.query({
      query: (id) => `show/${id}`,
    }),
    getCatServiceById: build.query({
      query: (id) => `show/${id}`,
    }),
    getOtherCatservice: build.query({
      query: (id) => `other/${id}`,
    }),
    getAllCatservices:build.query({
      query:()=>'all'
    })
  }),
});
export const {
  useAddCatServicesMutation,
  useGetCatServiceByIdQuery,
  useGetOtherCatserviceQuery,
  useViewCategoryServicesQuery,
  useGetAllCatservicesQuery,
} = catServiceAPi;
