import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<WithNavbar><Home /></WithNavbar>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Add routes for other pages like Search, Movies, TV Shows, Anime here */}
                </Routes>
            </div>
        </Router>
    );
}

const WithNavbar = ({ children }) => (
    <>
        <Navbar />
        <div className="content">
            {children}
        </div>
    </>
);

export default App;