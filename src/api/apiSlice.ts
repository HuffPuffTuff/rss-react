import { PhotoData, Result } from './../types/unsplashTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchData } from '../types/unsplashTypes';
import { _photosTransformer } from '../helpers/transforms';

const apiKey = 'client_id=JAJNLiC6qI3v8XCOk1DuKZX3TrAP68Htxoc93Y6ACNY';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com' }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    searchPhotos: builder.query<PhotoData[], string>({
      query: (searchValue: string) =>
        !!searchValue
          ? `/search/photos/?query=${searchValue}&per_page=20&${apiKey}`
          : `/photos/?per_page=20&${apiKey}`,
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
