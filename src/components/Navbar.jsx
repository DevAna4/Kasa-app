import React from 'react';
import Logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

// Import de fichiers


function Navbar() {
  return (
    <nav>
      <div className='nav-container'>
        <NavLink to='/'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
        </NavLink>
        <ul className='nav-container__nav'>
            <li className='home'>
                <NavLink to='/' >
                    <h5>Accueil</h5>
                </NavLink>
            </li>
            <li className='about'>
                <NavLink to='/À-propos'>
                    <h5>A Propos</h5>
                </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
