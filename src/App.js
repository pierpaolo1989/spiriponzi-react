import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;