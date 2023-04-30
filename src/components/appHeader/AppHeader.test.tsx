import React from 'react';
import { render } from '@testing-library/react';
import { test, vi, expect } from 'vitest';

vi.mock('react-router-dom', () => ({
  Link: vi.fn().mockImplementation(({ children }) => children),
  NavLink: vi.fn().mockImplementation(({ children }) => children),
}));

import { AppHeader } from './AppHeader';

test('Render AppHeader component', () => {
  const { getAllByText } = render(<AppHeader />);

  expect(getAllByText(/Search/i)).toBe;
  expect(getAllByText(/Form/i)).toBe;
  expect(getAllByText(/About/i)).toBe;
});
