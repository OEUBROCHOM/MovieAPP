import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Change Link to NavLink
import { useAuth } from "../contexts/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function NavBar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container">
        <div className="navbar-logo">
            <img src="/images/logo.png" alt="logo" className="logo" />
        </div>
        <div className="navbar-left">
            <NavLink to="/" className="navbar-brand"> Movie App </NavLink>
        </div>

        <div className="navbar-right">
            <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
            >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={toggleMobileMenu}> Home </NavLink>
                <NavLink to="/favorites" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}onClick={toggleMobileMenu}> Favorites </NavLink>
                {!isAuthenticated ? (
                    <>
                        <NavLink to="/login" className="nav-link login-btn" onClick={toggleMobileMenu}> Login </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => (isActive ? "nav-link signup-active" : "nav-link signup-btn")} onClick={toggleMobileMenu}> Sign Up </NavLink>
                    </>
                ) : (
                    <>
                        <span className="nav-user">Hi, {user.username}</span>
                        <button
                            type="button"
                            onClick={() => {
                            handleLogout();
                            toggleMobileMenu();
                            }}
                            className="nav-link logout-btn"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    </nav>
  );
}

export default NavBar;