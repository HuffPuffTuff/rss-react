import 'whatwg-fetch';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { test, expect, describe, vi } from 'vitest';

import renderWithProviders from './utilits/test/test-utulits';
import App from './App';

// vi.mock('react-router-dom', () => ({
//   Link: vi.fn().mockImplementation(({ children }) => children),
//   NavLink: vi.fn().mockImplementation(({ children }) => children),
// }));

describe('App test', () => {
  test('Render App component', async () => {
    const { queryByTestId } = await act(async () => renderWithProviders(<App />));

    expect(!!queryByTestId('header')).toBe(true);
  });
});
