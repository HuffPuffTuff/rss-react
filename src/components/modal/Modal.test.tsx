import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe, vi } from 'vitest';

import { Modal } from './Modal';

const closeModal = vi.fn();

describe('Modal component tests', () => {
  test('Render component', () => {
    render(
      <Modal closeModal={closeModal}>
        <h2>Title</h2>
      </Modal>
    );

    expect(screen.getByText('Title')).toBe;
  });
});
