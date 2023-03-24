import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Page404 from './Page404';

jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

test('Render Page404 component', async () => {
  await act(async () => {
    render(<Page404 />);
  });

  expect(screen.getAllByText(/Page doesn't exist/i)).toBe;
});
