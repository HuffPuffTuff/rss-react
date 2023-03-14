import React from 'react';
import { render, screen } from '@testing-library/react';

import Comic from './Comic';

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

  render(<Comic comic={data} />);

  expect(screen.getByText('Title')).toBe;
});
