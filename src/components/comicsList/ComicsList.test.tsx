import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicsList from './ComicsList';
import { act } from 'react-dom/test-utils';
import { comicsResponse } from '../../mocks/mockData';

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponse) })
) as jest.Mock;

test('Comics list render', async () => {
  await act(async () => {
    render(<ComicsList />);
  });

  expect(screen.getByText(/hellcat/i)).toBe;
  expect(screen.getByText(/IN DIAMOND AGE/i)).toBe;
});
