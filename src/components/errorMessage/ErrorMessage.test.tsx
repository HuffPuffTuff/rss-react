import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { ErrorMessage } from './ErrorMessage';

test('Render ErrorMessage component', () => {
  render(<ErrorMessage />);

  expect(screen.findByAltText('error')).toBe;
});
