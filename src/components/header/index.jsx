import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
            <h2 className="brand">
                <span className="brand--main"><a href="/">Dat | </a></span>
                <span className="brand--sub">Engineering the Future</span>
            </h2>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
         </nav>
      </header>
    );
  }
}

export default Header;