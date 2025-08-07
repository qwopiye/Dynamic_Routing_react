import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <nav>
     <NavLink to="/home" className='nav-ber'>Home</NavLink>
     <NavLink to="/blog/:title"  className='nav-ber'>Blog</NavLink>
     <NavLink to="/contact"  className='nav-ber'>Contact</NavLink>
      
    </nav>
  )
}

export default Navber
