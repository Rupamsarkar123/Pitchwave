import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        domain: '',
        occupation: '',
        customDomain: '',
        customOccupation: '',
        profilePic: null
    });

    const domains = [
        'Tech & Software', 'Healthcare & Biotech', 'Finance & Fintech',
        'E-commerce & Retail', 'EdTech & Learning', 'GreenTech & Sustainability',
        'Entertainment & Media', 'Agritech & FoodTech', 'Real Estate & PropTech',
        'Travel & Hospitality', 'Custom (Others)'
    ];

    const occupations = [
        'Founder / Co-founder', 'CEO / CTO / COO', 'Business Development Manager',
        'Product Manager', 'Startup Enthusiast', 'Angel Investor', 'Venture Capitalist (VC)',
        'Banker / Financial Analyst', 'Investment Advisor', 'Software Developer / Engineer',
        'AI / Machine Learning Engineer', 'Data Scientist', 'Cybersecurity Expert',
        'Blockchain Developer', 'Marketing Manager', 'Growth Hacker', 'Content Creator / Influencer',
        'Social Media Strategist', 'Public Relations (PR) Manager', 'Real Estate Developer / Agent',
        'Doctor/ Healthcare professional', 'EdTech Educator / Trainer', 'Legal Advisor',
        'Student', 'Custom (Others)'
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const formContainerStyle = {
        padding: '40px',
        maxWidth: '400px',
        margin: '100px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px'
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
        marginTop: '10px'
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={{ marginBottom: '10px' }}>Sign Up</h2>
            <p>Already have an account? <a href="/login" style={{ color: '#E74C3C', textDecoration: 'none' }}>Login now</a></p>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Enter Name" required onChange={handleChange} style={inputStyle} /><br />
                <input name="email" type="email" placeholder="Enter Email Address" required onChange={handleChange} style={inputStyle} /><br />
                <input name="password" type="password" placeholder="Enter Password" required onChange={handleChange} style={inputStyle} /><br />
                <button type="submit" style={buttonStyle}>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
