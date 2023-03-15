import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('../appHeader/AppHeader', () => () => {
  return <div data-testid="header" />;
});
jest.mock('../pages/MainPage', () => () => {
  return <div data-testid="main" />;
});


// jest.mock()

describe('App test', () => {
  test('Render App component', async () => {

    const queryByTestId = await act(async () => {
      const { queryByTestId } = render(<App />);

      return queryByTestId;
    });

    expect(!!queryByTestId('header')).toBe(true);
    expect(!!queryByTestId('main')).toBe(true);
  });
});
