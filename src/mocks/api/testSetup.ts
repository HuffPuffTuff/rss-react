import setupStore from '../../store';
import { server } from './server';
import { unsplashApi } from '../../api/apiSlice';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();

  store.dispatch(unsplashApi.util.resetApiState());
});

afterAll(() => server.close());
