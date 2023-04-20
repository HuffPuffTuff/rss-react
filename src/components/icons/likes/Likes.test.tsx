import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

import { Likes } from './Likes';

test('Likes component render', () => {
  const likes = 10;

  const { getByText } = render(<Likes likes={likes} />);

  expect(getByText(10)).toBe;
});
