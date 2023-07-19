import React from 'react';
import './header.css'; 
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
    <img
        className="logo"
        src={require('./img1.png')} 
        alt="Osmosis Learn"
      />
      <div className="search-icon">
        <FaSearch />
      </div>
      <div className="header-links">
        <a className='as' href="#explore">Explore</a>
        <a className='as' href="#create">Create</a>
        <a className='as' href="#events">Events</a>
        <a className='as' href="#login">Login</a>
        <a className='as' href="#signup">SignUp</a> 
      </div>
      <div>
        
      </div>
      
    </div>
  );
};

export default Header;
