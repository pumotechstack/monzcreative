import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section about">
          <img
            src="https://monzcreativeschool.com/assets/images/logo/monz-creative-school.png"
            alt="Monz Creative School"
            className="footer-logo"
          />
          <p>
            Monz Creative School is a premier institute for creative and digital
            learning. We provide courses in graphic design, animation, VFX,
            UI/UX, and more.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/placement">Placements</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@monzcreativeschool.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Monz Creative School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
