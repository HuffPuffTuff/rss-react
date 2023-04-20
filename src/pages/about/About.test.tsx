import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { About } from './About';

test('Render AboutUs component', () => {
  render(<About />);

  expect(screen.getByTestId('about-us')).toBe;
});
