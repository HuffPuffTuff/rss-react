import React, { useState, useEffect, MouseEvent } from 'react';
import Form from '../../components/form/Form';
import CardList from '../../components/formCards/FormCards';
import Modal from '../../components/modal/Modal';
import './formsPage.scss';

const FormsPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = 'Sell comic form';
  }, []);

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;

    if (target === currTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="forms__page" data-testid="forms-page-test">
      <Form />
      <CardList />

      <Modal show={showModal} closeModal={closeModal}>
        <p data-testid="save-message" className="forms__page-message">
          Your data has been saved!
        </p>
      </Modal>
    </div>
  );
};

export default FormsPage;
