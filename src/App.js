import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Time";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { UserProvider } from "./components/UserContext";
import "./App.css";

function App() {
  const user = "Hoàng Anh";

  return (
    <UserProvider user={user}>
      <Router>
        <nav className="nav">
          <div className="nav-tabs">
            <Link to="/">Home</Link>
            <Link to="/about">Time</Link>
            <Link to="/profile/Hoàng Anh">Profile</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
