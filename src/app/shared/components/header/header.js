import React from 'react';
import { Link } from 'react-router-dom';
import './header.sass';

const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/movies',
    text: 'Movies'
  }
];

const HeaderLink = ({ to, text, current }) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
);

export default ({ current }) => (
  <header id="header">
    <ul className="links">{links.map((link, index) => <HeaderLink key={index} current={current} {...link} />)}</ul>
  </header>
);
