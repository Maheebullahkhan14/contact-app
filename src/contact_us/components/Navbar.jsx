import React from 'react'
import { NavLogo , NavHamburger } from '../../Assets'

const Navbar = () => {
  return (
    <div className='hero-navbar-cover-wrapper'>
        <div className="hero-navbar-content-box d-flex justify-content-between align-items-center">
            <img src={NavLogo} alt="dsgnr logo"></img>
            <button className="hero-menu-icon">
                <img src={NavHamburger} alt="dsgnr logo"></img>
            </button>
        </div>
    </div>
  )
}

export default Navbar
