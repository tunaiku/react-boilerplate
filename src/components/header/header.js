import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './header.sass';
import { Container } from 'components/grid';

export default memo(({ current }) => {
  const links = [{ name: 'Home', url: '/' }, { name: 'Movies', url: '/movies' }];

  const LinkItems = links.map(link => (
    <li key={link.name} className="nav__item">
      <Link className="nav__link" to={link.url}>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <header id="header">
      <div className="navbar navbar--secondary">
        <Container>
          <div className="navbar__block navbar__block--end">
            <nav className="nav">
              <div className="nav__list">{LinkItems}</div>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
});
