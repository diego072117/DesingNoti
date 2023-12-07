// Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu, IconMenuClose, Logo } from "@/icons/Icons";
import "@/scss/Nav.scss";

export const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <nav className={`container-nav ${menu ? "menu-opened" : ""}`}>
      <div className="logo-nav">
        <Logo />
      </div>

      <div className="options-nav">
        <div className="menu-open" onClick={handleClick}>
          <IconMenu />
        </div>
        <div className={`optios-overlay ${menu ? "open" : "close"}`}>
          <div className="container-options">
            <div className="menu-close" onClick={handleClick}>
              <IconMenuClose />
            </div>

            <Link className="option" to="/">
              Home
            </Link>
            <Link className="option" to="/">
              New
            </Link>
            <Link className="option" to="/">
              Popular
            </Link>
            <Link className="option" to="/">
              Trending
            </Link>
            <Link className="option" to="/">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
