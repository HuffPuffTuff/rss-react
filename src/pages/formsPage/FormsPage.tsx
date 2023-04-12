import React, { useEffect } from 'react';
import Form from '../../components/form/Form';
import CardList from '../../components/formCards/FormCards';
import './formsPage.scss';

const FormsPage = () => {
  useEffect(() => {
    document.title = 'Sell comic form';
  }, []);

  return (
    <div className="forms__page" data-testid="forms-page">
      <Form />
      <CardList />
    </div>
  );
};

export default FormsPage;
