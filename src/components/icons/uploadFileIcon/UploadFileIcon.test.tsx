import React from 'react';
import UploadFileIcon from './UploadFileIcon';
import { render, screen } from '@testing-library/react';

test('Render icon', () => {
  render(<UploadFileIcon />);

  expect(screen.getByTestId('upload-icon')).toBe;
});
