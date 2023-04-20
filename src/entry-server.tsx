import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

import { AppStore, setupStore } from './redux/setupStore';
import App from './App';
import './styles/styles.scss';

export const render = (url: string, opts?: object) => {
  const store = setupStore();
  console.log(url);
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
};
