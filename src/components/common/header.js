import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="app" className="navbar-link">Home</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
