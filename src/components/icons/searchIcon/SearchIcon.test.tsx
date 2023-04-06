import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchIcon from './SearchIcon';

test('Render icon', () => {
  render(<SearchIcon />);

  expect(screen.getByTestId('search-icon')).toBe;
});
