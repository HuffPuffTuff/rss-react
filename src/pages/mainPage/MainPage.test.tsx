import React from 'react';
import 'whatwg-fetch';
import { screen, act } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { rest } from 'msw';

import renderWithProviders from '../../utilits/test/test-utulits';
import { MainPage } from './MainPage';
import { server } from '../../mocks/server/server';

describe('Main page test', () => {
  test('Render MainPage component', async () => {
    const { getByLabelText, getAllByTestId } = await act(async () =>
      renderWithProviders(<MainPage />)
    );

    await screen.findAllByTestId('photoCard');

    expect(!!getByLabelText('input-search')).toBe(true);
    expect(getAllByTestId('photoCard')).toHaveLength(2);
  });

  test('Error when fecth', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'baby, there was an error' }))
      )
    );

    const getByTestId = await act(async () => {
      const { getByTestId } = renderWithProviders(<MainPage />);
      return getByTestId;
    });

    await screen.findByTestId('error-message');

    expect(getByTestId('error-message')).toBe;
  });
});
