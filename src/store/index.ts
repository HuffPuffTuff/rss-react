import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import search from '../components/searchPanel/searchPanelSlice';
import { apiSlice } from '../api/apiSlice';
import forms from '../components/formCards/formCardsSlice';

const rootReducer = combineReducers({
  search,
  forms,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
