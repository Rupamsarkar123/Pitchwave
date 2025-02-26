import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1F2937", // Dark grey-blue
    color: "#F3F4F6", // Light grey
    fontSize: "18px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: "0",
    left:"0",
    width: "100%",
    zIndex: "1000",
    margin:"0",
  };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#F3F4F6",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
    fontWeight: "500",
  };

  const linkHoverStyle = {
    backgroundColor: "#374151", // Slightly darker grey
    color: "#E5E7EB", // Softer white
  };

  const buttonStyle = {
    padding: "8px 8px 8px 8px",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
    marginLeft: "10px",
    border: "none",
    cursor: "pointer",
    
  };

  const loginStyle = {
    ...buttonStyle,
    backgroundColor: "#3B82F6", // Blue for login
  };

  const signupStyle = {
    margin:"35px",
    ...buttonStyle,
    backgroundColor: "#EF4444", // Red for signup
  };

  const hoverEffect = (e, styles) => {
    Object.assign(e.target.style, styles);
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "white" }}>
        Pitchwave
      </div>
      <div style={linkContainerStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
          onMouseOut={(e) => hoverEffect(e, linkStyle)}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={linkStyle}
          onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
          onMouseOut={(e) => hoverEffect(e, linkStyle)}
        >
          About Us
        </Link>
        {isLoggedIn && (
          <Link
            to="/your-posts"
            style={linkStyle}
            onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
            onMouseOut={(e) => hoverEffect(e, linkStyle)}
          >
            Your Posts
          </Link>
        )}
        <Link
          to="/chats"
          style={linkStyle}
          onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
          onMouseOut={(e) => hoverEffect(e, linkStyle)}
        >
          Chats
        </Link>
      </div>
      <div>
        {isLoggedIn ? (
          <Link
            to="/profile"
            style={linkStyle}
            onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
            onMouseOut={(e) => hoverEffect(e, linkStyle)}
          >
            My Profile
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              style={loginStyle}
              onMouseOver={(e) => hoverEffect(e, { backgroundColor: "#2563EB" })}
              onMouseOut={(e) => hoverEffect(e, loginStyle)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={signupStyle}
              onMouseOver={(e) => hoverEffect(e, { backgroundColor: "#DC2626" })}
              onMouseOut={(e) => hoverEffect(e, signupStyle)}
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