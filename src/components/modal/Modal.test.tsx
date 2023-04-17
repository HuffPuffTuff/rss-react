import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Modal component tests', () => {
  test('Render component', () => {
    let show = true;

    const closeModal = () => {
      show = false;
    };

    render(
      <Modal show={show} closeModal={closeModal}>
        <h2>Title</h2>
      </Modal>
    );

    expect(screen.getByText('Title')).toBe;
  });
});
