import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PhotoList from './PhotoList';
import { photoCardsMock } from '../../mocks/mockData';

const mockGetPhotos = jest.fn(async () => {
  return photoCardsMock;
});

jest.mock('../../services/useUnsplashService', () => {
  return jest.fn(() => ({
    getPhotos: mockGetPhotos,
    searchPhotos: mockGetPhotos,
  }));
});

describe('PhotoList tests', () => {
  test('Comics list render without searchValue', async () => {
    await act(async () => {
      render(<PhotoList searchValue={''} />);
    });

    const photos = screen.getAllByTestId('photoCard');
    expect(photos).toHaveLength(2);
  });

  test('test modal', async () => {
    const user = userEvent.setup();

    const container = await act(async () => {
      const { container } = render(<PhotoList searchValue={''} />);
      return container;
    });

    const photos = screen.getAllByTestId('photoCard');
    await user.click(photos[0]);

    expect(screen.getByLabelText('modal')).toBe;

    await user.click(screen.getByLabelText('modal'));

    expect(container.querySelector('modal')).toBe(null);
  });

  test('PhotoList render with searchValue', async () => {
    await act(async () => {
      render(<PhotoList searchValue={'ad'} />);
    });

    const photos = screen.getAllByTestId('photoCard');
    expect(photos).toHaveLength(2);
  });
});
