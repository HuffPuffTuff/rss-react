declare global {
  interface Window {
    __PRELOADED_STATE__: string; // 👈️ turn off type checking
  }
}
export {};
