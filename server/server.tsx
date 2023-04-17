import path from 'path';
import Express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import compression from 'compression';

const isProd = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

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
    // const isPage;
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}! `);
  });
};
