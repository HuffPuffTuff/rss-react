import React from 'react';
import { render } from '@testing-library/react';
import { SearchIcon } from './SearchIcon';
import { test, expect } from 'vitest';

test('Render icon', () => {
  const { getByTestId } = render(<SearchIcon />);

  expect(getByTestId('search-icon')).toBe;
});
