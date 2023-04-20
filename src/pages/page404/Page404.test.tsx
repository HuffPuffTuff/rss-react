import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { test, expect, vi } from 'vitest';

import { Page404 } from './Page404';

vi.mock('react-router-dom', () => ({
  Link: vi.fn().mockImplementation(({ children }) => children),
  NavLink: vi.fn().mockImplementation(({ children }) => children),
}));

test('Render Page404 component', async () => {
  await act(async () => {
    render(<Page404 />);
  });

  expect(screen.getAllByText(/Page doesn't exist/i)).toBe;
  expect(document.title).toEqual('Page not found');
});
