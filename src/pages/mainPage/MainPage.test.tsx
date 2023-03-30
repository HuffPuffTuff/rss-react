import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainPage from './MainPage';
import { comicsResponse } from '../../mocks/mockData';

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponse) })
) as jest.Mock;

describe('Main page test', () => {
  test('Render MainPage component', async () => {
    await act(async () => {
      render(<MainPage />);
    });

    expect(!!screen.getByLabelText('input-search')).toBe(true);
    expect(screen.getByText(/hellcat/i)).toBe;
    expect(screen.getByText(/IN DIAMOND AGE/i)).toBe;
  });
});
