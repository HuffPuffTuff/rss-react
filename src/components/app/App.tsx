import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import ROUTES from '../../constants/routes';

const Page404 = lazy(() => import('../../pages/page404/Page404'));
const MainPage = lazy(() => import('../../pages/mainPage/MainPage'));
const AboutUs = lazy(() => import('../../pages/aboutUs/AboutUs'));
const FormsPage = lazy(() => import('../../pages/formsPage/FormsPage'));

const App = () => {
  return (
    <Router>
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={ROUTES.MAIN} element={<MainPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutUs />} />
            <Route path={ROUTES.FORM} element={<FormsPage />} />
            <Route path="*" element={<Page404 />} />
            <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export { App };
