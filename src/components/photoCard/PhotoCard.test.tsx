import React from 'react';
import { render, screen } from '@testing-library/react';

import PhotoCard from './PhotoCard';

test('Comic Card render', () => {
  const data = {
    id: '55525',
    thumbnail: '/image',
    title: 'Title',
    description: 'description',
    issueNumber: '142',
    pageCount: '20',
    price: '3.99',
  };

  render(<PhotoCard photo={data} />);

  expect(screen.getByText(/title/i)).toBe;
});
