import React from 'react';
import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';

import { FormError } from './FormError';

describe('FormErrorMessage tests', () => {
  test('Render component', () => {
    const { getByText } = render(<FormError message="new-error" />);
    expect(getByText('new-error')).toBe;
  });
  test('Render null component', () => {
    const { container } = render(<FormError message={undefined} />);
    expect(container.querySelector('.form__error')).toBe(null);
  });
});