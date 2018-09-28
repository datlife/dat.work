import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="brand">LOGO</div>
        <ul className="navbar">
          <li className="navbar-item">Blog</li>
          <li className="navbar-item">Projects</li>
        </ul>
      </div>
    );
  }
}

export default Header;