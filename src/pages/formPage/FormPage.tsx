import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Cards, Form } from '../../components';
import { RootState } from '../../redux/setupStore';
import './formPage.scss';

const FormPage = () => {
  const cards = useSelector((state: RootState) => state.forms.formCards);
  const message = 'No cards found! Submit your first form!';

  useEffect(() => {
    document.title = 'React-App Form';
  }, []);

  return (
    <div className="forms__page" data-testid="forms-page">
      <Form />
      <Cards cards={cards} message={message} />
    </div>
  );
};

export { FormPage };
