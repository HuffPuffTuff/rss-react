import { PhotoData, Result } from './unsplashTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchData } from './unsplashTypes';
import { _photosTransformer } from '../utilits/helpers';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com' }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    searchPhotos: builder.query<PhotoData[], string>({
      query: (searchValue: string) => {
        if (!!searchValue) {
          return {
            url: `/search/photos/`,
            params: {
              query: searchValue,
              per_page: 20,
              client_id: import.meta.env.VITE_UNSPLASH_KEY /* <insert token here>*/,
            },
          };
        }
        return {
          url: `/photos`,
          params: {
            per_page: 20,
            client_id: import.meta.env.VITE_UNSPLASH_KEY,
          },
        };
      },

      transformResponse: (response: SearchData | Result[]) => {
        if (Array.isArray(response)) {
          return response.map(_photosTransformer);
        } else {
          return response.results.map(_photosTransformer);
        }
      },
      providesTags: ['Photos'],
    }),
  }),
});

export const { useSearchPhotosQuery } = apiSlice;
