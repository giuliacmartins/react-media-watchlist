import React from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;