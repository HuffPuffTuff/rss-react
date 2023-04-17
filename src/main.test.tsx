import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import { act, screen, render } from '@testing-library/react';

import App from './components/app/App';
import setupStore from './store';

describe('Application root', () => {
  it('should render without crashing', async () => {
    const store = setupStore();

    await act(async () => {
      render(
        <div id="root" data-testid="root">
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>
        </div>
      );
    });

    const root = screen.getByTestId('root');
    expect(root).toBe;
  });
});
