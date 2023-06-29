import './Header.css';
import { useState } from 'react';
import TrianglesLogo from '../TrianglesLogo/TrianglesLogo';
import { Link } from 'react-router-dom';
function Header(screen) {
  return (
    <header className="header">
      <h1 className="header__title">16 TRIANGLES</h1>
      {screen < 1440 && (
        <div className="header__component">
          <TrianglesLogo />
        </div>
      )}

      <nav className="header__nav">
        <ul className="header__nav">
          <li className="header__nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
