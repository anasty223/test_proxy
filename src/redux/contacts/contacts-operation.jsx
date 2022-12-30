import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["USER"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/users`,
      keepUnusedDataFor: 5,
      providesTags: ["USER"],
    }),
    addContacts: builder.mutation({
      query: (newContact) => ({
        url: "/users",
        method: "POST",
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ["USER"],
    }),
    deleteContacts: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});
console.log("usersApi", usersApi);
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = usersApi;
