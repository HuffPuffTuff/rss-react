import { rest } from 'msw';
import { basicResponse, emptySearchResponse } from './responseMock';

const photosUrl = 'https://api.unsplash.com/photos';
const searchUrl = 'https://api.unsplash.com/search/photos/';

export const handlers = [
  rest.get(photosUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(basicResponse), ctx.delay(30));
  }),
  rest.get(searchUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(emptySearchResponse), ctx.delay(30));
  }),
];
