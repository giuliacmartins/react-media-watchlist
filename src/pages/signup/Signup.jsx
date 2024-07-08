import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default Signup;