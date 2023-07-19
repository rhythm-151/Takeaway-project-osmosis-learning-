import React from 'react';
import './ExploreAssets.css';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const ExploreAssets = () => {
  return (
    <div className="explore-assets">
      <div className="home-icon">
        <FaHome />
        <FaChevronRight />
      <span className='heading'> Explore Assets </span>  
      </div>
      <hr /> 
    </div>
  );
};

export default ExploreAssets;
