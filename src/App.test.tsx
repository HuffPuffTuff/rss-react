import 'whatwg-fetch';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { test, expect, describe } from 'vitest';

import renderWithProviders from './utilits/test/test-utulits';
import App from './App';

describe('App test', () => {
  test('Render App component', async () => {
    const { queryByTestId } = await act(async () => renderWithProviders(<App />));

    expect(!!queryByTestId('header')).toBe(true);
  });
});
