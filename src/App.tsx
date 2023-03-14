import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
