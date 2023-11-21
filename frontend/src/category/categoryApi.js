import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/category/" ,
  prepareHeaders:(headers)=>{
    // headers.set('Content-Type','multipart/form-data')
    headers.set('Accept','application/json')
    headers.set('Authorize',localStorage.getItem('token'))
    return headers
  }
}),
  endpoints: (builder) => ({
    viewCategory: builder.query({
      query: () => "view",
    }),
    getCategoryService: builder.query({
      query: (id) => `service/${id}`,
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "create",
        method: "POST",
        body: category,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({id,...category}) => ({
        url: `update/${id}`,
        method: "PUT",
        body: category,
      }),
    }),
    addSubCategory: builder.mutation({
      query: ({ id, ...subcategory }) => ({
        url: `subcategory/create/${id}`,
        method: "post",
        body: subcategory,
      }),
    }),
    addCatgService:builder.mutation({
      query:({id,...service})=>({
        url:`service/create/${id}`,
        method:'post',
        body:service
      })
    })
  }),
});
export const {
  useViewCategoryQuery,
  useGetCategoryServiceQuery,
  useAddCategoryMutation,
  useAddSubCategoryMutation,
  useUpdateCategoryMutation,
  useAddCatgServiceMutation
} = categoryApi;
