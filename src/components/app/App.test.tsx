import 'whatwg-fetch';
import React from 'react';
import { act } from 'react-dom/test-utils';

import renderWithProviders from '../../utilits/test/test-utulits';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
  NavLink: jest.fn().mockImplementation(({ children }) => children),
}));

describe('App test', () => {
  test('Render App component', async () => {
    const { queryByTestId } = await act(async () => renderWithProviders(<App />));

    expect(!!queryByTestId('header')).toBe(true);
  });
});
