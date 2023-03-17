import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { comicsResponse } from '../../mocks/mockData';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
  NavLink: jest.fn().mockImplementation(({ children }) => children),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponse) })
) as jest.Mock;

describe('App test', () => {
  test('Render App component', async () => {
    const queryByTestId = await act(async () => {
      const { queryByTestId } = render(<App />);

      return queryByTestId;
    });

    expect(!!queryByTestId('header')).toBe(true);
    expect(screen.getByText(/hellcat/i)).toBe;
    expect(screen.getByText(/IN DIAMOND AGE/i)).toBe;
  });
});
