import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import AppHeader from './AppHeader';

jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockImplementation(({ children }) => children),
  NavLink: jest.fn().mockImplementation(({ children }) => children),
}));

test('Render AppHeader component', () => {
  render(<AppHeader />);

  expect(screen.getAllByText(/React App/i)).toBe;
  expect(screen.getAllByText(/Main Page/i)).toBe;
  expect(screen.getAllByText(/About us/i)).toBe;
});
