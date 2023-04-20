import { RootState } from '../redux/setupStore';

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState; // 👈️ turn off type checking
  }
}
export {};
