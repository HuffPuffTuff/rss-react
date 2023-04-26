import { setupStore } from './redux/setupStore';
import { server } from './mocks/server/server';
import { unsplashApi } from './redux/api/apiSlice';
import { beforeAll, afterEach, afterAll } from 'vitest';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();

  store.dispatch(unsplashApi.util.resetApiState());
});

afterAll(() => server.close());
