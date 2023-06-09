import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';
import setupStore from './store';
import './styles/styles.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
