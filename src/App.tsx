import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
