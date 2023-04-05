import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchPanel from './SearchPanel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockSearch = jest.fn();

describe('SearchPanel tests', () => {
  test('checking for changes in rendering input data', async () => {
    const { unmount } = render(<SearchPanel onSearch={mockSearch} />);

    act(() => {
      const input = screen.getByLabelText('input-search') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'gamardjoba' } });
      expect(input.value).toBe('gamardjoba');
    });

    act(() => {
      unmount();
      const storage = localStorage.getItem('searchValue');
      expect(storage).toBe('gamardjoba');
    });
  });

  test('Test get data from local storage', () => {
    render(<SearchPanel onSearch={mockSearch} />);
    const input = screen.getByLabelText('input-search') as HTMLInputElement;

    expect(input.defaultValue).toBe('gamardjoba');

    const form = screen.getByLabelText('search-form');

    fireEvent.submit(form);

    expect(mockSearch).toBeCalled;
  });
});
