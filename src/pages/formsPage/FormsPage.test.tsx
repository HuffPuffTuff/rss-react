import React from 'react';
import { render, screen } from '@testing-library/react';

import FormsPage from './FormsPage';

describe('FormsPage component tests', () => {
  test('Render component', () => {
    render(<FormsPage />);

    expect(screen.getByText(/standart/i)).toBe;
  });
});
