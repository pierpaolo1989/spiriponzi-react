import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Portfolio from './pages/Portfolio';
import Footer from './components/layout/Footer';
import PortfolioTracker from './components/PortfolioTracker';

function App() {
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={false}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<PortfolioTracker />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;