import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
