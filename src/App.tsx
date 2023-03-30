import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import FormPage from './pages/FormPage/FormPage';

function App() {
  return (
    <div className="container" data-testid="app">
      <div className="header-container">
        <Header />
      </div>
      <div className="app-container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="forms" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
