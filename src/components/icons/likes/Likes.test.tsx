import React from 'react';
import { render, screen } from '@testing-library/react';

import Likes from './Likes';

test('Likes component render', () => {
  const likes = 10;

  render(<Likes likes={likes} />);

  expect(screen.getByText(10)).toBe;
});
