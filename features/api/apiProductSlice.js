import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiProductSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // The "base query" is the implementation of the logic to actually make a network call
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),

  // The "endpoints" are the API definitions
  endpoints: (builder) => ({
    getProducts: builder.query({
      // The `query` method expects to be called with an API function that performs the request
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = apiProductSlice;
