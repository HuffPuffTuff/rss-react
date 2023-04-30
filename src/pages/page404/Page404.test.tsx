import React from 'react';
import { render } from '@testing-library/react';
import { test, expect, vi } from 'vitest';

import { Page404 } from './Page404';

vi.mock('react-router-dom', () => ({
  Link: vi.fn().mockImplementation(({ children }) => children),
  NavLink: vi.fn().mockImplementation(({ children }) => children),
}));

test('Render Page404 component', () => {
  const { getAllByText } = render(<Page404 />);

  expect(getAllByText(/Page doesn't exist/i)).toBe;
  expect(document.title).toEqual('Page not found');
});
