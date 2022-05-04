import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <header>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
      </header>
  )
}

export default Header