import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      toast.success("Already logged in!");
    }
  }, []);

<<<<<<< HEAD
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

=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful!");
        localStorage.setItem("token", data.token);
        console.log("User logged in:", data);
      } else {
        toast.error(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: loading ? "#95a5a6" : "#3498DB",
          }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "350px",
    margin: "100px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "92%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

>>>>>>> 89a903ce33bcfdc575851611e158acf111287421
export default Login;
