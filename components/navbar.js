import React from 'react'
import { faHome, faUser, faCog, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const options = [
    {
      title: 'Home',
      icon: faHome,
      active: true
    },
    {
      title: 'Messages',
      icon: faEnvelope
    },
    {
      title: 'Wishlist',
      icon: faStar
    },
    {
      title: 'Settings',
      icon: faCog
    },
    {
      title: 'My Account',
      icon: faUser
    }
  ]
  return (
    <nav className="Navbar">
      {options.map(option => (
        <button key={option.title} className={`Navbar-option ${option.active ? 'active' : ''}`}>
          <FontAwesomeIcon icon={option.icon} size="lg"/>
          <small>{option.title}</small>
        </button>
      ))}
    </nav>
  )
}

export default Navbar
