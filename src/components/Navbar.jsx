import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#2C3E50",
    color: "white",
    fontSize: "18px",
    borderRadius: "4px",
    height: "35px",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1000",
  };

  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  };

  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
    marginLeft: "10px",
  };

  const loginStyle = {
    ...buttonStyle,
    backgroundColor: "#E74C3C", // Blue for login
  };

  const signupStyle = {
    ...buttonStyle,
    backgroundColor: "#E74C3C", // Red for signup
  };

  const hoverEffect = (e, color) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "22px" }}>Pitchwave</div>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About Us
        </Link>
        {isLoggedIn && (
          <Link to="/your-posts" style={linkStyle}>
            Your Posts
          </Link>
        )}
        <Link to="/chats" style={linkStyle}>
          Chats
        </Link>
      </div>
      <div>
        {isLoggedIn ? (
          <Link to="/profile" style={linkStyle}>
            My Profile
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              style={loginStyle}
              onMouseOver={(e) => hoverEffect(e, "#2980B9")}
              onMouseOut={(e) => hoverEffect(e, "#3498DB")}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={signupStyle}
              onMouseOver={(e) => hoverEffect(e, "#2980B9")}
              onMouseOut={(e) => hoverEffect(e, "#3498DB")}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
