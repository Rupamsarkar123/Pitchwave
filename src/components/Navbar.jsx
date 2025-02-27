import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

<<<<<<< HEAD
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
=======

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
>>>>>>> eb185c332b6414d8d02d0ede720131ffbf5fce62

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logout
  };
<<<<<<< HEAD
  const styles = {
    nav: {
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
    },
    linkContainer: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    link: {
      textDecoration: "none",
      color: "#F3F4F6",
      padding: "8px 12px",
      borderRadius: "5px",
      transition: "background-color 0.3s, color 0.3s",
      fontWeight: "500",
    },
    linkHover: {
      backgroundColor: "#374151",
      color: "#E5E7EB",
    },
    button: {
      padding: "8px 12px",
      borderRadius: "5px",
      textDecoration: "none",
      color: "white",
      fontWeight: "bold",
      transition: "0.3s",
      border: "none",
      cursor: "pointer",
    },
    login: {
      backgroundColor: "#3B82F6",
    },
    signup: {
      margin: "35px",
      backgroundColor: "#EF4444",
    },
    logout: {
      backgroundColor: "#DC2626",
    },
    title: {
      fontWeight: "bold",
      fontSize: "24px",
      color: "white",
    },
=======

  const loginStyle = {
    ...buttonStyle,
    backgroundColor: "#EF4444", // Red for login
>>>>>>> eb185c332b6414d8d02d0ede720131ffbf5fce62
  };

  const applyHoverEffect = (e, styles) => {
    Object.assign(e.target.style, styles);
  };

  return (
<<<<<<< HEAD
    <nav style={styles.nav}>
      <div style={styles.title}>Pitchwave</div>
      <div style={styles.linkContainer}>
        {["/", "/about", ...(isLoggedIn ? ["/your-posts"] : []), "/chats"].map(
          (path, index) => (
            <Link
              key={index}
              to={path}
              style={styles.link}
              onMouseOver={(e) => applyHoverEffect(e, styles.linkHover)}
              onMouseOut={(e) => applyHoverEffect(e, styles.link)}
            >
              {path.replace("/", "").replace("your-posts", "Your Posts") ||
                "Home"}
            </Link>
          )
=======
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "white" }}>
        Pitchwave
      </div>
      <div style={linkContainerStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => hoverEffect(e, linkHoverStyle)}
          onMouseOut={(e) => hoverEffect(e, linkStyle)}>
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
>>>>>>> eb185c332b6414d8d02d0ede720131ffbf5fce62
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              style={styles.link}
              onMouseOver={(e) => applyHoverEffect(e, styles.linkHover)}
              onMouseOut={(e) => applyHoverEffect(e, styles.link)}
            >
              My Profile
            </Link>
            <button
              style={{ ...styles.button, ...styles.logout }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ ...styles.button, ...styles.login }}
              onMouseOver={(e) =>
                applyHoverEffect(e, { backgroundColor: "#2563EB" })
              }
              onMouseOut={(e) => applyHoverEffect(e, styles.login)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{ ...styles.button, ...styles.signup }}
              onMouseOver={(e) =>
                applyHoverEffect(e, { backgroundColor: "#DC2626" })
              }
              onMouseOut={(e) => applyHoverEffect(e, styles.signup)}
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
