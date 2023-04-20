import React from 'react';
import { UploadFileIcon } from './UploadFileIcon';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

test('Render icon', () => {
  const { getByTestId } = render(<UploadFileIcon />);

  expect(getByTestId('upload-icon')).toBe;
});
