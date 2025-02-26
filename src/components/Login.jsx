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
        maxWidth: '300px',
        margin: '200px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const inputStyle = {
        width: '93%',
        padding: '10px',
        marginTop:'10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#3498DB',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        marginTop: '10px',
    };

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = '#2980B9';
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = '#3498DB';
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={{ textAlign: 'center' }}>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
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