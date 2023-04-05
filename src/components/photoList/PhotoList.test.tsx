import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PhotoList from './PhotoList';
import { photoCardsMock } from '../../mocks/mockData';

const mockGetPhotos = jest.fn(async () => {
  return await photoCardsMock;
});

jest.mock('../../services/useUnsplashService', () => {
  return jest.fn(() => ({
    getPhotos: mockGetPhotos,
    searchPhotos: mockGetPhotos,
  }));
});

describe('ComicsList tests', () => {
  test('Comics list render without searchValue', async () => {
    const user = userEvent.setup();

    await act(async () => {
      render(<PhotoList searchValue={''} />);
    });

    const photos = screen.getAllByTestId('photoCard');
    await user.click(photos[0]);

    expect(screen.getByLabelText('modal')).toBe;

    await user.click(screen.getByLabelText('modal'));
  });

  test('Comics list render with searchValue', async () => {
    const user = userEvent.setup();

    await act(async () => {
      render(<PhotoList searchValue={'ad'} />);
    });

    const photos = screen.getAllByTestId('photoCard');
    expect(photos).toHaveLength(2);
  });
});
