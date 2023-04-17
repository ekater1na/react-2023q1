import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../models/unsplash';
import { SearchParams } from '../models/searchParams';
import 'whatwg-fetch';
import nodeFetch, { Request, Response } from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = nodeFetch;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.Request = Request;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.Response = Response;

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/search',
    prepareHeaders: (headers: Headers) => {
      headers.set('Authorization', 'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc');
      return headers;
    },
    fetchFn: fetch,
  }),
  tagTypes: ['searchResult'],

  endpoints: (builder) => ({
    getImages: builder.query<ResponseData, SearchParams>({
      query: ({ value, currentPage, resultPerPage, sortOrder }) => ({
        url: `photos?&query=${value}&page=${currentPage}&per_page=${resultPerPage}&order_by=${sortOrder}`,
        query: {
          value: value,
          page: currentPage,
          per_page: resultPerPage,
          order_by: sortOrder,
        },
      }),
      providesTags: ['searchResult'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetImagesQuery, useLazyGetImagesQuery } = imageApi;
