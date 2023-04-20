import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Cards } from './Cards';
import { cardsMock } from '../../mocks/data/cardMocks';

const setup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

describe('Cards component test', () => {
  test('Render component with data', async () => {
    const { container, getAllByTestId, getByLabelText, user, getByTestId } = setup(
      <Cards cards={cardsMock} message="not found" />
    );
    const cards = getAllByTestId('photoCard');
    expect(cards).toHaveLength(2);

    await user.click(cards[0]);
    expect(getByLabelText('modal')).toBe;

    await user.click(getByTestId('modal-image'));
    await user.click(getByTestId('closeModalIcon'));
    expect(container.querySelector('modal')).toBe(null);
  });
  test('Render component with empty data ', async () => {
    const { getByTestId } = render(<Cards cards={[]} message="not found" />);

    expect(getByTestId('no-photos')).toBe;
  });
});
