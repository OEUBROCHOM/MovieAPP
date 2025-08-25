import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "../css/Navbar.css";

function NavBar() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <nav className="navbar-container">
        <div className="navbar-logo">
            <img src="/images/logo.png" alt="logo"  className="logo"/>
        </div>
        <div className="navbar-left">
            <Link to="/" className="navbar-brand">Movie App</Link>
        </div>

        <div className="navbar-right">
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link" onClick={toggleMobileMenu}> Home</Link>
                <Link to="/favorites" className="nav-link" onClick={toggleMobileMenu}>Favorites</Link>
                {!isAuthenticated ? (
                    <>
                        <Link to="/login" className="nav-link login-btn" onClick={toggleMobileMenu}>Login</Link>
                        <Link to="/signup" className="nav-link signup-btn" onClick={toggleMobileMenu}>Sign Up</Link>
                    </>
                ) : (
                    <>
                        <span className="nav-user">Hi, {user.username}</span>
                        <button type="button" onClick={() => { handleLogout(); toggleMobileMenu(); }} className="nav-link logout-btn">
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