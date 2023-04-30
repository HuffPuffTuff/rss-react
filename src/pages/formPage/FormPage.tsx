import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Cards, Form } from '../../components';
import { RootState } from '../../redux/setupStore';

const FormPage = () => {
  const { formCards } = useSelector((state: RootState) => state.forms);
  const message = 'No cards found! Submit your first form!';

  const styles = {
    page: 'form-cards',
  };

  useEffect(() => {
    document.title = 'React-App Form';
  }, []);

  return (
    <div className="form-page" data-testid="forms-page">
      <Form />
      <Cards cards={formCards} message={message} styles={styles} />
    </div>
  );
};

export { FormPage };
