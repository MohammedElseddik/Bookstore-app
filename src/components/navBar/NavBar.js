import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../icons/Icons';

import './navBar.css';

const NavBar = () => (
  <header className="nav-header">
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <h1 className="brand-icon">Bookstore CMS</h1>
        </li>
        <li className="nav-item">
          <Link to="/">Books</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <div className="icon-container">
        <UserIcon />
      </div>
    </nav>
  </header>
);

export default NavBar;
