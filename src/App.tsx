import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppHeader } from './components';
import ROUTES from './constants/routes';

import { MainPage, About, Page404, FormPage } from './pages';

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.FORM} element={<FormPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
