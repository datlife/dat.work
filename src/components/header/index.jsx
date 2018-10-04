import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <h3 className="brand">
          <a href="/">
            <span className="brand--main">Dat | </span>
            <span className="brand--sub">Engineering</span>
            </a>
          </h3>
        </div>
        <nav className="header__nav-bar">
          <button className='btn night-mode-switch' 
              onClick={(e) => {document.body.classList.toggle('night-mode')}}>
              Night mode
          </button>
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
          <a href="/about">About</a>
         </nav>
      </header>
    );
  }
}
export default Header;