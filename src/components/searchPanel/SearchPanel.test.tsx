import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchPanel from './SearchPanel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockSearch = jest.fn((_text: string) => {});

describe('SearchPanel tests', () => {
  test('checking for changes in rendering input data', async () => {
    const { unmount } = render(<SearchPanel onSearch={mockSearch} />);

    act(() => {
      const input = screen.getByLabelText('input-search') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Gamardjoba' } });
      expect(input.value).toBe('Gamardjoba');
    });

    act(() => {
      unmount();
      const storage = localStorage.getItem('searchValue');
      expect(storage).toBe('Gamardjoba');
    });
  });

  test('Test get data from local storage', () => {
    screen.debug();
    render(<SearchPanel onSearch={mockSearch} />);
    const input = screen.getByLabelText('input-search') as HTMLInputElement;

    expect(input.defaultValue).toBe('Gamardjoba');
  });
});
