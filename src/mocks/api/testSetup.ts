import setupStore from '../../store';
import { server } from './server';
import { apiSlice } from '../../api/apiSlice';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();

  store.dispatch(apiSlice.util.resetApiState());
});

afterAll(() => server.close());
