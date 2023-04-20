import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Card } from './Card';
import { photoCardMock } from '../../mocks/mockData';

const onFotoSelectedMock = jest.fn();

test('Photo Card render', () => {
  render(<Card onPhotoSelected={onFotoSelectedMock} photo={photoCardMock} />);

  const card = screen.getByTestId('photoCard');
  expect(card).toBe;

  fireEvent.click(card);
  expect(onFotoSelectedMock).toBeCalled;
});
