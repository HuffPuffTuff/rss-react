import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { photoCardMock, emptyPhotoCardMock } from '../../mocks/mockData';
import PhotoCardModal from './PhotoCardModal';

const closeModalMock = jest.fn();

describe('PhotoCardModal component tests', () => {
  test('Render component photoModal', () => {
    const { getByTestId } = render(
      <PhotoCardModal closeModal={closeModalMock} photo={photoCardMock} />
    );

    const closeModalIcon = getByTestId('closeModalIcon');

    fireEvent.click(closeModalIcon);
    expect(closeModalMock).toBeCalled;
  });

  test('Render component photoModal without data', () => {
    const { container } = render(
      <PhotoCardModal closeModal={closeModalMock} photo={emptyPhotoCardMock} />
    );

    expect(container.querySelectorAll('.empty-field')).toHaveLength(4);
  });
});
