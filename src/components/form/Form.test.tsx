import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forms from './Form';

const mockUpdateCards = jest.fn();

const setup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

global.URL.createObjectURL = jest.fn();

describe('Forms component tests', () => {
  test('render component', () => {
    render(<Forms updateCards={mockUpdateCards} />);

    expect(screen.getByText(/Comic name/i)).toBe;
  });

  test('Submit form with errors', async () => {
    const { user } = setup(<Forms updateCards={mockUpdateCards} />);
    const button = screen.getByRole('button', { name: /submit/i });

    await user.click(button);
    expect(screen.getAllByRole('alert')).toHaveLength(6);
  });

  test('Submit form with errors', async () => {
    const { user } = setup(<Forms updateCards={mockUpdateCards} />);
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

    expect(mockUpdateCards).toBeCalled;
  });
});
