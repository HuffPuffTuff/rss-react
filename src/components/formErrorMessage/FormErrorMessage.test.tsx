import React from 'react';
import { render } from '@testing-library/react';
import FormErrorMessage from './FormErrorMessage';

describe('FormErrorMessage tests', () => {
  test('Render component', () => {
    const { getByText } = render(<FormErrorMessage message="new-error" />);
    expect(getByText('new-error')).toBe;
  });
});
