import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'><h1>MovieLand</h1></div>
      </Link>
    </div>
  )
}

export default Header