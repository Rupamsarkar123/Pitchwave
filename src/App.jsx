import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import YourPosts from "./components/YourPosts";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  const isAuthenticated = false; // Login check

  return (
    <Router>
      <Navbar />
      <main style={{ marginBottom: "60px" }}>
        {" "}
        {/* Adds space for footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/chats" element={<Chats />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/your-posts"
            element={isAuthenticated ? <YourPosts /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
