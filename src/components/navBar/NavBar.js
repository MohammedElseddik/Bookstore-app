import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <span>Bookstore CMS</span>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </div>
);

export default NavBar;
