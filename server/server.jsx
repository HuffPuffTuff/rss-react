import path from 'path';
import fs from 'fs';

import React from 'react';
import { Provider } from 'react-redux';
import Express from 'express';
import compression from 'compression';
import { renderToString } from 'react-dom/server';

const isProd = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

import { App } from '../src/components';

const startServer = async () => {
  const app = Express();
  app.use(compression());

  const { PORT = 3001 } = process.env;

  if (isProd) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sirv = require('sirv');
    app.use(sirv(`${root}/dist/client`));
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const vite = require('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;

    app.use(viteDevMiddleware);
  }

  app.get('/*', async (req, res) => {
    fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred');
      } else {
        return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`)
        );
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}! `);
  });
};

startServer();
