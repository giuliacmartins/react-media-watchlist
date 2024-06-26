import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2>Media Watchlist</h2>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tvshows">TV Shows</a></li>
                <li><a href="/anime">Anime</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    );
}

export default Navbar;