import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import './app.scss';

const Page404 = lazy(() => import('../../pages/page404/Page404'));
const MainPage = lazy(() => import('../../pages/mainPage/MainPage'));
const AboutUs = lazy(() => import('../../pages/aboutUs/AboutUs'));
const FormsPage = lazy(() => import('../../pages/formsPage/FormsPage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/forms" element={<FormsPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
