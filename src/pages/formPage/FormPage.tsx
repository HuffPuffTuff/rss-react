import React, { useEffect } from 'react';
import { Form, FormCards } from '../../components';

import './formPage.scss';

const FormPage = () => {
  useEffect(() => {
    document.title = 'React-App Form';
  }, []);

  return (
    <div className="forms__page" data-testid="forms-page">
      <Form />
      <FormCards />
    </div>
  );
};

export { FormPage };
