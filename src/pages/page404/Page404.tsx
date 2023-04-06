import React, { lazy, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

const ErrorMessage = lazy(() => import('../../components/errorMessage/ErrorMessage'));

const Page404 = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);
  return (
    <div className="page-404">
      <ErrorMessage />
      <p>Page doesn&apos;t exist!</p>
      <Link className="link" to="/">
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
