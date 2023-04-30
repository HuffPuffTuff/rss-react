import { ErrorMessage, PageMessage } from '../../components';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return (
    <div className="page404">
      <ErrorMessage />
      <PageMessage message={`Page doesn't exist!`} />
      <Link className="link" to="/">
        Back to main page
      </Link>
    </div>
  );
};

export { Page404 };
