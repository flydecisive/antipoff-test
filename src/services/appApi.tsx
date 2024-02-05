import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (pageCount) => {
        return {
          url: `/users/?page=${pageCount}&per_page=8`,
          method: "GET",
        };
      },
    }),

    getSingleUser: builder.query({
      query: (id: number) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
    }),

    // в запросах login и register пришлось замокать username: "eve.holt@reqres.in", потому что пользователей с другим username API не пропускает
    // и вообще без username тоже, даже при login

    loginReq: builder.mutation({
      query: (args) => ({
        url: "/login",
        body: {
          username: "eve.holt@reqres.in",
          email: args.email,
          password: args.password,
        },
        method: "POST",
      }),
    }),

    registerReq: builder.mutation({
      query: (args) => ({
        url: "/register",
        body: {
          username: "eve.holt@reqres.in",
          email: args.email,
          password: args.password,
        },
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLazyGetAllUsersQuery,
  useLazyGetSingleUserQuery,
  useLoginReqMutation,
  useRegisterReqMutation,
} = appApi;
