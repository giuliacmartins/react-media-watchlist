import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
}

export default Login;