import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Spinner from './Spinner';

test('Render Spinner component', async () => {
  const queryByTestId = await act(async () => {
    const { queryByTestId } = render(<Spinner />);

    return queryByTestId;
  });

  expect(!!queryByTestId('spinner')).toBe(true);
});
