import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicsList from './PhotoList';
import { act } from 'react-dom/test-utils';
import { comicsResponseMock } from '../../mocks/mockData';

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponseMock) })
) as jest.Mock;

describe('ComicsList tests', () => {
  test('Comics list render without searchValue', async () => {
    await act(async () => {
      render(<ComicsList searchValue={''} />);
    });

    expect(screen.getByText(/first title/i)).toBe;
    expect(screen.getByText(/second title/i)).toBe;
  });
});
