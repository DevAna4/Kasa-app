import React from 'react';
import { NavLink } from 'react-router-dom';

//## Import Pictures ##//
import Logo from '../assets/Logo.png';

//####################//

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
                <NavLink to='/A-propos'>
                    <h5>A Propos</h5>
                </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
