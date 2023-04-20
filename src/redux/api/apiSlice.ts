import { PhotoData, Result } from '../../types/unsplashTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchData } from '../../types/unsplashTypes';
import { _photosTransformer } from '../../utilits/helpers';

const apiKey = import.meta.env.VITE_UNSPLASH_KEY; /* <insert your token here>*/

export const unsplashApi = createApi({
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
              client_id: apiKey,
            },
          };
        }
        return {
          url: `/photos`,
          params: {
            per_page: 20,
            client_id: apiKey,
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

export const { useSearchPhotosQuery } = unsplashApi;
