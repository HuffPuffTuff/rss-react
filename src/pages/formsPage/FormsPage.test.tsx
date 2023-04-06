import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormsPage from './FormsPage';

global.URL.createObjectURL = jest.fn();

describe('FormsPage component tests', () => {
  test('Render component', () => {
    render(<FormsPage />);

    expect(screen.getByTestId('forms-page-test')).toBe;
  });

  test('Check modal, and creating card', async () => {
    const user = userEvent.setup();
    const container = await act(async () => {
      const { container } = render(<FormsPage />);
      return container;
    });

    const button = screen.getByRole('button', { name: /submit/i });

    const inputName = screen.getByRole('textbox', { name: /name/i }) as HTMLInputElement;
    const inputDate = screen.getByRole('date') as HTMLInputElement;
    const inputCurrency = screen.getByRole('select', { name: /currency/i }) as HTMLSelectElement;
    const inputPrice = screen.getByRole('spinbutton', { name: /price/i }) as HTMLInputElement;
    const inputFile = screen.getByLabelText('image-input') as HTMLInputElement;
    const inputCheckbox = screen.getByLabelText('checkbox') as HTMLInputElement;

    await user.type(inputName, 'Fedor');
    expect(inputName.value).toEqual('Fedor');

    await user.type(inputDate, '2024-04-04');
    expect(inputDate.value).toEqual('2024-04-04');

    await user.selectOptions(inputCurrency, 'USDT');
    expect(inputCurrency.value).toEqual('USDT');

    await user.type(inputPrice, '100');
    expect(inputPrice.value).toEqual('100');

    const image = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' });
    await user.upload(inputFile, image);
    expect(inputFile.value).toBe;

    await user.click(inputCheckbox);
    expect(inputCheckbox.checked).toEqual(true);

    await user.click(button);

    const modal = screen.getByLabelText('modal');
    await user.click(screen.getByTestId('save-message'));

    expect(modal).toBe;

    await user.click(modal);

    expect(container.querySelector('modal')).toBe(null);
  });
});
