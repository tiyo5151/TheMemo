import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa6';
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-icon">
        <h1>THE MEMO</h1>
        <div className="app-icon-ball"></div>
        <FontAwesomeIcon icon={faBarsStaggered} className="app-icon-bars" />
      </div>
      <div className="app-search">
        <input type="text" placeholder="Search" />
        <div className="user-icon"></div>
        <FaBars className="nav-bars" />
      </div>
    </div>
  );
};

export default Header;
