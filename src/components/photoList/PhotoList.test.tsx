import 'whatwg-fetch';
import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../utilits/testSetup';
import { server } from '../../mocks/api/server';
import PhotoList from './PhotoList';
import renderWithProviders from '../../utilits/test-utulits';
import { rest } from 'msw';

describe('PhotoList tests', () => {
  test('Test render list and render modal', async () => {
    const user = userEvent.setup();

    const { container, getAllByTestId, getByLabelText, getByTestId } = await act(async () => {
      const { container, getAllByTestId, getByLabelText, getByTestId } = renderWithProviders(
        <PhotoList />
      );
      return { container, getAllByTestId, getByLabelText, getByTestId };
    });

    expect(screen.getByTestId('spinner')).toBe;

    await screen.findAllByTestId('photoCard');

    const photos = getAllByTestId('photoCard');
    expect(photos).toHaveLength(2);

    await user.click(photos[0]);
    expect(getByLabelText('modal')).toBe;

    await user.click(getByTestId('modal-image'));
    await user.click(getByTestId('closeModalIcon'));
    expect(container.querySelector('modal')).toBe(null);
  });

  test('PhotoList render with searchValue', async () => {
    await act(async () => {
      renderWithProviders(<PhotoList />, { preloadedState: { search: { value: 'test' } } });
    });

    await screen.findByTestId('no-photos');

    expect(screen.findByTestId('no-photos')).toBe;
  });

  test('Error when fetch photo list', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'baby, there was an error' }))
      )
    );

    const getByTestId = await act(async () => {
      const { getByTestId } = renderWithProviders(<PhotoList />);
      return getByTestId;
    });

    await screen.findByTestId('error-message');

    expect(getByTestId('error-message')).toBe;
  });
});
