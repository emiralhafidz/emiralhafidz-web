import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* responsive menu */}
      <div className={`linksResponsive ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" className="hvr-bounce-to-right">
          Home
        </NavLink>
        <NavLink to="/experience" className="hvr-bounce-to-right">
          Experience
        </NavLink>
        <NavLink to="/education" className="hvr-bounce-to-right">
          Blog
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
