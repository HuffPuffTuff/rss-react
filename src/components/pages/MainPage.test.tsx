import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainPage from './MainPage';

jest.mock('../searchPanel/SearchPanel', () => () => {
  return <input data-testid="seacrh" />;
});

jest.mock('../comicsList/ComicsList', () => () => {
  return <div data-testid="comics-list" />;
});

describe('Main page test', () => {
  test('Render MainPage component', async () => {
    const queryByTestId = await act(async () => {
      const { queryByTestId } = render(<MainPage />);

      return queryByTestId;
    });

    expect(!!queryByTestId('seacrh')).toBe(true);
    expect(!!queryByTestId('comics-list')).toBe(true);
  });
});
