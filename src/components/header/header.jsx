import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img
          src={require('../../assets/menu.svg')}
          alt='burger menu'
          className='menuIcon'
        />
      </div>
      <div className='header-text'>Your rides</div>
    </div>
  );
};

export default Header;
