import setupStore from '../../redux/setupStore';
import { server } from './server';
import { unsplashApi } from '../../redux/api/apiSlice';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();

  store.dispatch(unsplashApi.util.resetApiState());
});

afterAll(() => server.close());
