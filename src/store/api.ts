import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../models/unsplash';

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/search',
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getImageByName: builder.query<ResponseData, string>({
      query: (value) => `photos?&query=${value}`,
      // extraOptions: {
      //   page: currentPage,
      //   per_page: isNaN(resultPerPage) ? 10 : resultPerPage,
      //   order_by: sortOrder,
      // },

      //providesTags: ['Cards'],
      //transformResponse: (response: ResponseData) => response.results,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetImageByNameQuery } = imageApi;
