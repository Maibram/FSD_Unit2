import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
    <nav className="Navclass" aria-label="Main navigation">
      <ul>
        <li><Link to="/page1">First</Link></li>
        <li><Link to="/page2">Second</Link></li>
        <li><Link to="/page3">Third</Link></li>
        <li><Link to="/page4">Fourth</Link></li>
      </ul>
    </nav>
    </div>
  )
}


export default Navbar
