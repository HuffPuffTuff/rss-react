import { AppStore } from '../redux/setupStore';
import { unsplashApi } from '../redux/api/apiSlice';

const apiRequest = async (store: AppStore) => {
  store.dispatch(unsplashApi.endpoints.searchPhotos.initiate(''));

  return await Promise.all(store.dispatch(unsplashApi.util.getRunningQueriesThunk()));
};

export { apiRequest };
