import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaArrowUp, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-about">
            <img className="footer-logo" src="/images/logo.png" alt="Movie App Logo" />
            <h2 className="footer-app-name">Movie App</h2>
            <p className="footer-tagline">
                Greatness isn’t found alone, it’s forged when talent meets opportunity.
            </p>
            <p className="contact-heading">Contact Me</p>
            <div className="contact-info">
                <p>+855 114 99 631</p>
                <p>oeubrochom.webdev@gmail.com</p>
            </div>
        </div>

        <div className="footer-links">
            <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="#">Ancient story</Link></li>
                    <li><Link to="#">Cartoon</Link></li>
                    <li><Link to="#">War II</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Helpful Links</h4>
                <ul>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Supports</Link></li>
                    <li><Link to="#">Condition</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Subscribe for More Movie</h4>
                <form className="subscribe-form">
                    <input type="email" placeholder="Enter your Email" aria-label="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
            <div className="footer-socials">
                <a href="https://www.facebook.com/erbkeo?mibextid=ZbWKwL" aria-label="Facebook" className="social-icon">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/oeub-rochom-65ba44344" aria-label="LinkedIn" className="social-icon">
                    <FaLinkedinIn />
                </a>
                <a href="https://x.com/ErbKeo" aria-label="Twitter" className="social-icon">
                    <FaTwitter />
                </a>
                <a href="https://www.youtube.com/@ERBKEO" aria-label="YouTube" className="social-icon">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/oeubrochom/" aria-label="Instagram" className="social-icon">
                    <FaInstagram />
                </a>
            </div>
            <p className="copyright-text">@ 2025 DG GROUP. Developed by Oeub Rochom</p>
            <button onClick={scrollToTop} aria-label="Back to top" className="back-to-top">
            <FaArrowUp />
            </button>
      </div>
    </footer>
  );
}

export default Footer;