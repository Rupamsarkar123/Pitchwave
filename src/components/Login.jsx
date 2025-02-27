import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted', { email, password });
    };

    const formContainerStyle = {
        padding: '20px',
        maxWidth: '400px',
        margin: '100px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const inputStyle = {
        width: '95.5%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#E74C3C',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        marginTop: '10px',
    };

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = '#C0392B';
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = '#E74C3C';
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <h3 style={{ textAlign: 'center'}}>
                Don't have an account?{' '}
                <a href="/Signup" style={{ color: '#E74C3C', textDecoration: 'none' }}>
                    Create a free account
                </a>
            </h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
                <p style={{ textAlign: 'right' }}>
                    <a href="/forgot-password" style={{ color: '#E74C3C', textDecoration: 'none' }}>
                        Forgot password?
                    </a>
                </p>
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
