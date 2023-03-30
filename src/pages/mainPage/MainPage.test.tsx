import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainPage from './MainPage';
import { comicsResponseMock } from '../../mocks/mockData';

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponseMock) })
) as jest.Mock;

describe('Main page test', () => {
  test('Render MainPage component', async () => {
    await act(async () => {
      render(<MainPage />);
    });

    expect(!!screen.getByLabelText('input-search')).toBe(true);
    expect(screen.getByText(/first title/i)).toBe;
    expect(screen.getByText(/second title/i)).toBe;
  });

  test('Search comics test', async () => {
    await act(async () => {
      render(<MainPage />);
    });

    await act(async () => {
      const input = screen.getByLabelText('input-search') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'First Title' } });
      expect(screen.getByText(/first title 1/i)).toBe;
    });
  });
});
