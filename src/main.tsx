import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components';
import setupStore from './store';
import './styles/styles.scss';

const store = setupStore();

console.log(window.__PRELOADED_STATE__);

const indexJSX = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const container = document.getElementById('root') as HTMLElement;

hydrateRoot(container, indexJSX);
