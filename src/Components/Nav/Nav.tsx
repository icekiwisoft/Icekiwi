import React from 'react'
import './Nav.scss'
import Logo from '../../assets/Logo.svg'
import Language from '../../assets/Language.png'
import { NavLink } from 'react-router-dom'
import Dropdown from '../../assets/Dropdown.png'

const Nav = ()=> {
  return (
    <>
      <div className='padding-body' id='nav'>
        <img className='logo' src={Logo} alt="" />
        <ul className='nav-links'>
            <li><NavLink to="#">Accueil</NavLink> </li>
            <li><NavLink to="#">A propos</NavLink></li>
            <li><NavLink to="#">Nos services</NavLink></li>
            <li><NavLink to="#">Nous contacte</NavLink></li>
        </ul>
        <div id='nav-language'>
            <img src={Language} alt="" />
            <span>Francais</span>
            <img src={Dropdown} alt="" />
        </div>
      </div>
    </>
  )
}

export default Nav
