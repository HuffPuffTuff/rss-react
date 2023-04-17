import React from 'react';
import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithProviders from '../../utilits/test/test-utulits';
import '../../mocks/api/testSetup';
import Form from './Form';

const setup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(jsx),
  };
};

global.URL.createObjectURL = jest.fn();

describe('Forms component tests', () => {
  test('render component', () => {
    const { getByRole } = renderWithProviders(<Form />);

    const button = getByRole('button', { name: /submit/i });
    expect(button).toBe;
  });

  test('Submit form with errors', async () => {
    const { user, getByRole } = setup(<Form />);
    const button = getByRole('button', { name: /submit/i });

    await user.click(button);
    expect(screen.getAllByRole('alert')).toHaveLength(5);
  });

  test('Submit form', async () => {
    const { user, getByRole, getByLabelText, getByTestId, container } = setup(<Form />);
    const button = screen.getByRole('button', { name: /submit/i });

    const inputUsername = getByRole('textbox', { name: /username/i }) as HTMLInputElement;
    const inputFullname = getByRole('textbox', { name: /full name/i }) as HTMLInputElement;
    const inputDate = getByRole('date') as HTMLInputElement;
    const inputFile = getByLabelText('image-input') as HTMLInputElement;
    const inputCheckbox = getByLabelText('checkbox') as HTMLInputElement;

    await user.type(inputUsername, 'qwerty');
    await user.type(inputFullname, 'qwerty qwerty');
    await user.type(inputDate, '2022-02-22');

    const image = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' });
    await user.upload(inputFile, image);

    await user.click(inputCheckbox);
    await user.click(button);

    expect(getByLabelText('modal')).toBe;

    await user.click(getByTestId('save-message'));
    await user.click(getByLabelText('modal'));

    expect(container.querySelector('modal')).toBe(null);
  });
});
