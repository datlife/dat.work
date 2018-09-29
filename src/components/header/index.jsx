import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <h2 className="brand">
            <span className="brand--main"><a href="/">Dat | </a></span>
            <span className="brand--sub">Engineering</span>
          </h2>
        </div>
        <nav className="navbar">
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
          <a href="/about">About</a>
         </nav>
      </header>
    );
  }
}

export default Header;