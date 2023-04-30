import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { unsplashApi } from './api/apiSlice';
import search from './slices/searchPanelSlice';
import forms from './slices/formPageSlice';

const rootReducer = combineReducers({
  search,
  forms,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export { setupStore };
