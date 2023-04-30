import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { Card } from './Card';
import { cardMock, emptyCardMock } from '../../mocks/data/cardMocks';

const onFotoSelectedMock = vi.fn();

describe('Card component tests', () => {
  test('Photo Card render', () => {
    render(<Card onPhotoSelected={onFotoSelectedMock} photo={cardMock} />);

    const card = screen.getByTestId('photoCard');
    expect(card).toBe;

    fireEvent.click(card);
    expect(onFotoSelectedMock).toBeCalled;
  });
  test('Photo Card render without avatar', () => {
    render(<Card onPhotoSelected={onFotoSelectedMock} photo={emptyCardMock} />);

    const card = screen.getByTestId('photoCard');
    expect(card).toBe;
  });
});
