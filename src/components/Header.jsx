import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Tutup menu kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="header">
      <NavLink to="/" className="brand">
        Emir <span>.</span>
      </NavLink>

      <div className="links">
        <NavLink to="/" className="hvr-underline-from-left">
          Home
        </NavLink>
        <NavLink to="/experience" className="hvr-underline-from-left">
          Experience
        </NavLink>
        <NavLink to="/education" className="hvr-underline-from-left">
          Blog
        </NavLink>
      </div>

      {/* hamburger button */}
      <div className="hamburger" onClick={toggleMenu} ref={buttonRef}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* responsive menu */}
      <div
        className={`linksResponsive ${menuOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <NavLink
          to="/"
          className="hvr-bounce-to-right"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/experience"
          className="hvr-bounce-to-right"
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          className="hvr-bounce-to-right"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
