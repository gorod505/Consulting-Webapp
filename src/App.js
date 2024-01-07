// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import InsightPage from './pages/InsightPage';
import CareersPage from './pages/CareersPage';
import PhonePage from './pages/PhonePage';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/insight" element={<InsightPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/phone" element={<PhonePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
