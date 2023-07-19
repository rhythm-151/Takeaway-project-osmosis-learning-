import React from 'react';
import './miniheader.css';
import { AiOutlineWindows, AiOutlineUnorderedList, AiOutlineDown } from 'react-icons/ai';

const Miniheader = () => {
  return (
    <div className="headiv">
      <h2>Explore Assets</h2>
      <div className="filter-icons">
        <input type="text" placeholder="Filter" />
        <div className="icons">
          <AiOutlineWindows size={24} /> 
          <AiOutlineUnorderedList size={24} /> 
          <div className="dropdown-icon">
            <AiOutlineDown size={20} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miniheader;
