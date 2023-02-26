import React from 'react'
import './Header.css'


const Header = (props) => {
  return (
    <div className='Header'>
      <div className='logo'>
        <img src={props.logo} />
      </div>
      <div className='rightContainer'>
        <p>credit score check</p>
        <p>CRED pay</p>
      </div>
    </div>
  )
}

export default Header;