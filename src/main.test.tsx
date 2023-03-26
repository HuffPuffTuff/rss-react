import React from 'react';
import App from './components/app/App';
import { render, screen } from '@testing-library/react';

jest.mock('./components/app/App', () => () => {
  return <div>Hello World!</div>;
});

describe('Application root', () => {
  it('should render without crashing', () => {
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    expect(screen.getByText(/hello world/i)).toBe;
  });
});
