import React from 'react';

import './modal.scss';

interface IProps {
  children: JSX.Element;
  closeModal: () => void;
  show: boolean;
}

const Modal = ({ children, closeModal, show }: IProps) => {
  const handleCloseModal = (e: React.MouseEvent) => {
    const target = e.target;
    const currTarget = e.currentTarget;

    if (target === currTarget) {
      closeModal();
    }
  };

  return show ? (
    <div className="modal" aria-label="modal" onClick={handleCloseModal}>
      {children}
    </div>
  ) : null;
};

export default Modal;
