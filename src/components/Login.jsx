import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      toast.success("Already logged in!");
    }
  }, [setIsLoggedIn]);

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
        localStorage.setItem("token", data.token); // Store token
        setIsLoggedIn(true);
        window.location.href = "/profile"; // Redirect to profile
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
      <Toaster position="top-center" reverseOrder={false} />
      <h2 style={styles.title}>Login</h2>
      <h3 style={styles.subtitle}>
        Don't have an account?{" "}
        <a href="/Signup" style={styles.link}>
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
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <p style={{ textAlign: "right" }}>
          <a href="/forgot-password" style={styles.link}>
            Forgot password?
          </a>
        </p>
        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: loading ? "#95a5a6" : "#E74C3C",
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
    maxWidth: "400px",
    margin: "100px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
  },
  input: {
    width: "95.5%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  link: {
    color: "#E74C3C",
    textDecoration: "none",
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

export default Login;
