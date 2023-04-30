import React, { MouseEvent } from 'react';

interface IProps {
  children: JSX.Element | null;
  closeModal: (e: MouseEvent) => void;
}

const Modal = ({ children, closeModal }: IProps) => {
  return (
    <div className="modal" aria-label="modal" onClick={closeModal}>
      {children}
    </div>
  );
};

export { Modal };
