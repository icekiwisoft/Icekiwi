import React, { useState } from 'react';
import './Nav.scss';
import Logo from '../../assets/Logo.svg';
import Language from '../../assets/Language.png';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../assets/Dropdown.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='padding-body' id='nav'>
      <img className='logo' src={Logo} alt="Logo" />
      <button className='menu-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>À propos</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Nos services</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Nous contacter</NavLink></li>
      </ul>
      <div id='nav-language'>
        <img src={Language} alt="Language" />
        <span>Français</span>
        <img src={Dropdown} alt="Dropdown" />
      </div>
    </div>
  );
}

export default Nav;
