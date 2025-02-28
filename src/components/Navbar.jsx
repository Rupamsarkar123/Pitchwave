import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1F2937",
    color: "#F3F4F6",
    fontSize: "18px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1000",
    margin: "0",
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
    backgroundColor: "#374151",
    color: "#E5E7EB",
  };

  const buttonStyle = {
    padding: "8px 12px",
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
    backgroundColor: "#EF4444",
  };

  const signupStyle = {
    ...buttonStyle,
    backgroundColor: "#EF4444",
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

        {/* New "Ask ChatAI" Link */}
        <a
          href="https://chatai-1-2enq.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
          onMouseOut={(e) => hoverEffect(e, linkStyle)}
        >
          Ask ChatAI
        </a>
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
              onMouseOver={(e) =>
                hoverEffect(e, { backgroundColor: "#2563EB" })
              }
              onMouseOut={(e) => hoverEffect(e, loginStyle)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={signupStyle}
              onMouseOver={(e) =>
                hoverEffect(e, { backgroundColor: "#DC2626" })
              }
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
