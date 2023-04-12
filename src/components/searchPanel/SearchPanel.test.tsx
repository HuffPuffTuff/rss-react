import React from 'react';
import 'whatwg-fetch';
import { act, fireEvent } from '@testing-library/react';

import '../../mocks/api/testSetup';
import renderWithProviders from '../../utilits/test/test-utulits';
import SearchPanel from './SearchPanel';

describe('SearchPanel tests', () => {
  test('checking for changes in rendering input data', async () => {
    const { getByLabelText } = await act(async () => renderWithProviders(<SearchPanel />));

    const input = getByLabelText('input-search') as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: 'gamardjoba' } });
      const form = getByLabelText('search-form');

      fireEvent.submit(form);
      expect(input.value).toBe('gamardjoba');
    });
  });
});
