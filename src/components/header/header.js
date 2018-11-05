import React from 'react';
import { Link } from 'react-router-dom';
import './header.sass';

export default ({ current }) => (
  <header id="header">
    <ul className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
  </header>
);
