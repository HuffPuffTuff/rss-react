import { RootState } from '../store';

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState; // 👈️ turn off type checking
  }
}
export {};
