import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css';
import Logo from '../img/logo.png'


const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: 'about',
    label: 'About',
  },
  {
    to: 'contacts',
    label: 'Contacts',
  },
  {
    to: 'user',
    label: 'User',
  },
];

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar_wrapper flex'>
          <img className='navbar_logo' src={Logo} alt='logo img' />
          <div className='navbar_nav flex' id={showLinks ? 'hidden' : ''}>
            {links.map(link => (
              <NavLink className='navbar_link' key={link.to} to={link.to} onClick={() => setShowLinks(false)}>{link.label}</NavLink>
            ))}
          </div>
          <button className='navbar_button' onClick={() => setShowLinks(!showLinks)}>
            {!showLinks ? '\u2630' : '\u2715'}
          </button>
        </div>
      </div>
    </nav >
  )
}

export default NavBar;