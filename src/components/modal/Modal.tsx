import React, { MouseEvent } from 'react';
import './modal.scss';

interface IProps {
  children: JSX.Element | null;
  closeModal: (e: MouseEvent) => void;
  show: boolean;
}

const Modal = ({ children, closeModal, show }: IProps) => {
  return show ? (
    <div className="modal" aria-label="modal" onClick={closeModal}>
      {children}
    </div>
  ) : null;
};

export default Modal;
