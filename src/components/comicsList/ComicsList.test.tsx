import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicsList from './ComicsList';
import { act } from 'react-dom/test-utils';
import { comicsResponse } from '../../mocks/mockData';

global.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(comicsResponse) })
) as jest.Mock;

describe('ComiccList tests', () => {
  test('Comics list render without searchValue', async () => {
    await act(async () => {
      render(<ComicsList searchValue={null} />);
    });

    expect(screen.getByText(/hellcat/i)).toBe;
    expect(screen.getByText(/IN DIAMOND AGE/i)).toBe;
  });
});
