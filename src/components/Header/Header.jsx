import React from 'react'
import headerSvg from '../../assets/svg/hacker-news@3x.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='header-png-title' src={headerSvg} />
    </div>
  )
}

export default Header