import React from 'react';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

test('Render AboutUs component', () => {
  render(<AboutUs />);

  expect(screen.getByTestId('about-us')).toBe;
});
