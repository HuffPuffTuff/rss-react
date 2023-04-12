import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import '../../utilits/testSetup';
import renderWithProviders from '../../utilits/test-utulits';
import SearchPanel from './SearchPanel';

describe('SearchPanel tests', () => {
  test('checking for changes in rendering input data', async () => {
    const { getByLabelText } = renderWithProviders(<SearchPanel />);

    const input = getByLabelText('input-search') as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: 'gamardjoba' } });
      const form = getByLabelText('search-form');

      fireEvent.submit(form);
      expect(input.value).toBe('gamardjoba');
    });
  });
});
