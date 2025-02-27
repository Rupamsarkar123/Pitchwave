import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// Define the lists outside the component to avoid re-initialization
const domains = [
  "Tech & Software",
  "Healthcare & Biotech",
  "Finance & Fintech",
  "E-commerce & Retail",
  "EdTech & Learning",
  "GreenTech & Sustainability",
  "Entertainment & Media",
  "Agritech & FoodTech",
  "Real Estate & PropTech",
  "Travel & Hospitality",
  "Custom (Others)",
];

const occupations = [
  "Founder / Co-founder",
  "CEO / CTO / COO",
  "Business Development Manager",
  "Product Manager",
  "Startup Enthusiast",
  "Angel Investor",
  "Venture Capitalist (VC)",
  "Banker / Financial Analyst",
  "Investment Advisor",
  "Software Developer / Engineer",
  "AI / Machine Learning Engineer",
  "Data Scientist",
  "Cybersecurity Expert",
  "Blockchain Developer",
  "Marketing Manager",
  "Growth Hacker",
  "Content Creator / Influencer",
  "Social Media Strategist",
  "Public Relations (PR) Manager",
  "Real Estate Developer / Agent",
  "Doctor/ Healthcare professional",
  "EdTech Educator / Trainer",
  "Legal Advisor",
  "Student",
  "Custom (Others)",
];

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    domain: domains[0], // Default to first value
    occupation: occupations[0], // Default to first value
    customDomain: "",
    customOccupation: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful!");
        console.log("User registered:", data);
      } else {
        toast.error(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup.");
    }
  };

  // Styles
  const formContainerStyle = {
    padding: "20px",
    maxWidth: "500px",
    margin: "100px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const inputStyle = {
    width: "95.5%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#3498DB",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "10px",
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#2980B9";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#3498DB";
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ textAlign: "center" }}>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          style={inputStyle}
        />
        <select
          name="domain"
          required
          onChange={handleChange}
          style={inputStyle}
          value={formData.domain}
        >
          {domains.map((domain, idx) => (
            <option key={idx} value={domain}>
              {domain}
            </option>
          ))}
        </select>
        {formData.domain === "Custom (Others)" && (
          <input
            name="customDomain"
            type="text"
            placeholder="Specify Custom Domain"
            onChange={handleChange}
            style={inputStyle}
          />
        )}
        <select
          name="occupation"
          required
          onChange={handleChange}
          style={inputStyle}
          value={formData.occupation}
        >
          {occupations.map((occupation, idx) => (
            <option key={idx} value={occupation}>
              {occupation}
            </option>
          ))}
        </select>
        {formData.occupation === "Custom (Others)" && (
          <input
            name="customOccupation"
            type="text"
            placeholder="Specify Custom Occupation"
            onChange={handleChange}
            style={inputStyle}
          />
        )}
        <input
          name="profilePic"
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
