import React from 'react';
import { render, screen } from '@testing-library/react';

import AppHeader from './AppHeader';

jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockImplementation(({ children }) => children),
  NavLink: jest.fn().mockImplementation(({ children }) => children),
}));

test('Render AppHeader component', () => {
  render(<AppHeader />);

  expect(screen.getAllByText(/Search/i)).toBe;
  expect(screen.getAllByText(/Form/i)).toBe;
  expect(screen.getAllByText(/About us/i)).toBe;
});
