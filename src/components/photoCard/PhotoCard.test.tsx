import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import PhotoCard from './PhotoCard';
import { photoCardMock } from '../../mocks/mockData';

const onFotoSelectedMock = jest.fn();

test('Photo Card render', () => {
  render(<PhotoCard onPhotoSelected={onFotoSelectedMock} photo={photoCardMock} />);

  const card = screen.getByTestId('photoCard');
  expect(card).toBe;

  fireEvent.click(card);
  expect(onFotoSelectedMock).toBeCalled;
});
