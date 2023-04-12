import 'whatwg-fetch';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { photoCardsMock } from '../../mocks/mockData';
import FormCards from './FormCards';
import '../../mocks/api/testSetup';
import renderWithProviders from '../../utilits/test/test-utulits';

describe('CardList tests', () => {
  test('Render component with empty data', () => {
    const { getByText } = renderWithProviders(<FormCards />);

    expect(getByText('No cards found! Submit your first form!')).toBe;
  });

  test('Render component with data', async () => {
    const user = userEvent.setup();

    const { findAllByTestId, getByTestId, getByLabelText, container } = renderWithProviders(
      <FormCards />,
      {
        preloadedState: {
          forms: {
            formCards: photoCardsMock,
          },
        },
      }
    );

    const photos = await findAllByTestId('photoCard');

    await user.click(photos[0]);
    expect(getByLabelText('modal')).toBe;

    await user.click(getByTestId('modal-image'));
    await user.click(getByTestId('closeModalIcon'));
    expect(container.querySelector('modal')).toBe(null);
  });
});
