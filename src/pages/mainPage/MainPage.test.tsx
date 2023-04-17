import React from 'react';
import 'whatwg-fetch';
import { screen, act } from '@testing-library/react';

import '../../mocks/api/testSetup';
import renderWithProviders from '../../utilits/test/test-utulits';
import MainPage from './MainPage';

describe('Main page test', () => {
  test('Render MainPage component', async () => {
    const { getByLabelText, getAllByTestId } = await act(async () =>
      renderWithProviders(<MainPage />)
    );

    await screen.findAllByTestId('photoCard');

    expect(!!getByLabelText('input-search')).toBe(true);
    expect(getAllByTestId('photoCard')).toHaveLength(2);
  });
});
