import 'whatwg-fetch';
import React from 'react';
import { act } from '@testing-library/react';

import '../../mocks/api/testSetup';
import renderWithProviders from '../../utilits/test/test-utulits';
import FormsPage from './FormsPage';

global.URL.createObjectURL = jest.fn();

describe('FormsPage component tests', () => {
  test('Render component', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<FormsPage />));

    expect(document.title).toEqual('Sell comic form');
    expect(getByTestId('forms-page')).toBe;
  });
});
