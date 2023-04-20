import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { cardMock, emptyCardMock } from '../../mocks/data/cardMocks';
import { CardModal } from './CardModal';

const closeModalMock = vi.fn();

describe('PhotoCardModal component tests', () => {
  test('Render component photoModal', () => {
    const { getByTestId } = render(<CardModal closeModal={closeModalMock} photo={cardMock} />);

    const closeModalIcon = getByTestId('closeModalIcon');

    fireEvent.click(closeModalIcon);
    expect(closeModalMock).toBeCalled;
  });

  test('Render component photoModal without data', () => {
    const { container } = render(<CardModal closeModal={closeModalMock} photo={emptyCardMock} />);

    expect(container.querySelectorAll('.empty-field')).toHaveLength(4);
  });
});
