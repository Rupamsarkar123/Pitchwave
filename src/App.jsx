import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import YourPosts from "./components/YourPosts";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chatfront from "./components/chatfront";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <main style={{ marginBottom: "60px" }}>
        {/* Adds space for footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/chats" element={<Chatfront />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/your-posts"
            element={isLoggedIn ? <YourPosts /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
