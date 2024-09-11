import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerStyle = {
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    padding: '1rem',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  };

  const navStyle = {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: isNavOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem',
    },
  };

  const navItemStyle = {
    margin: '0 1rem',
    '@media (max-width: 768px)': {
      margin: '0.5rem 0',
    },
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#ffd700',
    },
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
    margin: '2px 0',
    transition: 'all 0.3s ease',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Drew Pickens
        </Link>
        <nav style={navStyle}>
          <div style={navItemStyle}>
            <Link to="/" style={navLinkStyle}>Home</Link>
          </div>
          <div style={navItemStyle}>
            <Link to="/experience" style={navLinkStyle}>Experience</Link>
          </div>
          <div style={navItemStyle}>
            <Link to="/skills" style={navLinkStyle}>Skills</Link>
          </div>
          <div style={navItemStyle}>
            <Link to="/hobbies" style={navLinkStyle}>Hobbies</Link>
          </div>
          <div style={navItemStyle}>
            <Link to="/contact" style={navLinkStyle}>Contact</Link>
          </div>
        </nav>
        <div style={hamburgerStyle} onClick={toggleNav}>
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;