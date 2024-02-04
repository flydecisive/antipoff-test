import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<{ data: any }, void>({
      query: () => {
        return {
          url: "/users/?page=1&per_page=8",
          method: "GET",
        };
      },
    }),

    getSingleUser: builder.query<{ data: any }, number>({
      query: (id: number) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLazyGetAllUsersQuery, useLazyGetSingleUserQuery } = appApi;
