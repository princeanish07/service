import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { isRejectedWithValue } from "@reduxjs/toolkit";

export const userApi = createApi({
  reducerPath: "userAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/user/",
prepareHeaders:(headers)=>{
  headers.set('Accept','application/json')
  headers.set('Authorize',localStorage.getItem('token'))
  return headers
}
}),
  
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => `customer/${id}`,
    }),
    searchUser: build.mutation({
      query: (user) => ({
        url: "customer/find",
        method: "POST",
        body: user,
      }),
    }),
    validateUser: build.mutation({
      query: (user) => ({
        url: "customer/valid",
        method: "POST",
        body: user,
      }),
    }),
    searchEmail: build.mutation({
      query: ({ password_confirmation, ...user }) => ({
        url: "customer/edit/email",
        method: "POST",
        body: user,
      }),
    }),
    registerUser: build.mutation({
      query: ({id,...user}) => ({
        url: `create/${id}`,
        method: "POST",
        body: user,
      }),
    }),

    loginUser: build.mutation({
      query: ({roleId,...credential}) => ({
        url: `login/${roleId}`,
        method: "POST",
        body: credential,
        
      }),
    
    }),
  editUser: build.query({
      query: (id) =>`view/${id}`
       
    }),
    updateUser:build.mutation({
      query: ({ id, ...user }) => ({
        url: `customer/update/${id}`,
        method: "PUT",
        body: user,
      }),
    }),
    logOutUser: build.mutation({
      query: (id) => ({
        url: `customer/delete/${id}`,
        method: "DELETE",
      }),
    }),
    deactivateUser: build.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSearchUserMutation,
  useValidateUserMutation,
  useSearchEmailMutation,
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
  useDeactivateUserMutation,
  useUpdateUserMutation,
  useEditUserQuery,
} = userApi;



export const rtkQueryErrorLogger = (store) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.log(action);
    const error = action.payload
    if (error.status === "FETCH_ERROR") {
      store.dispatch({
        type: 'API_REQUEST_ERROR',
        payload: {
          status: error.status,
          message: error.message,
          data: error.data
        }
      })
      // network error
      // console.warn('Network error:', error)
      // toast.error({ title: 'Network error', message: 'Could not connect to server' })
    } else if (error.status >= 500) {
      // server error
      console.warn('Server error:', error)
      // toast.error({ title: 'Server error', message: 'Something went wrong on the server' })
    } else if (error.status >= 400) {
      // client error
      console.warn('Client error:', error)
      // toast.warn({ title: 'Client error', message: 'Invalid request' })
    } else {
      // connection error
      console.warn('Connection error:', error)
      // toast.error({ title: 'Connection error', message: 'Could not connect to server' })
    }
  }

  return next(action)
}

