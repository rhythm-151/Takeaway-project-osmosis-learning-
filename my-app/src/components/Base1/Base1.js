import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './Base1.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserCircle, FaInfoCircle, FaTags } from 'react-icons/fa';
import { VscThreeBars } from 'react-icons/vsc';
import oneImage from '../../Images/one.jpeg';
import twoImage from '../../Images/new.jpeg';
import threeImage from '../../Images/three.jpeg';
import fourImage from '../../Images/four.jpeg';
import fiveImage from '../../Images/five.jpeg';

const Base1 = () => {
  const [images, setImagesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/assets')
      .then((response) => setImagesData(response.data))
      .catch((error) => console.error('Error fetching assets:', error));
  }, []);
  const imagesData = [
    {
      src: oneImage,
      type: 'PNG',
      time: '2 mins',
      date: '2023-07-25',
      text: 'Quick look at different PM processes',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(29)',
    },
    {
      src: twoImage,
      alt: 'Image 2',
      type: 'LINK',
      time: '10 mins',
      date: '2023-07-26',
      text: 'How to use Word Press for Project',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(11)',
    },
    {
      src: threeImage,
      type: 'HTML',
      time: '3 mins',
      date: '2023-07-27',
      text: 'Get to know Project Management',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(11)',
    },
    {
      src: fourImage,
      type: 'MP4',
      time: '6 mins',
      date: '2023-07-28',
      text: 'AI project management tools you need',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(11)',
    },
    {
      src: fiveImage,
      type: 'MP3',
      time: '8:30 PM',
      date: '2023-07-29',
      text: 'Successfully manage Hybrid and Remote',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(30)',
    },
  ];

  return (
    <div className="base-container">
    <div className="title">
      Growing In The Profession(19)
    </div>
    <div className="arrow-icons">
      <div className="arrow-icons-left">
        <AiOutlineArrowLeft size={24} />
        <AiOutlineArrowRight size={24} />
      </div>
      <VscThreeBars size={24} /> 
    </div>
      <div className="image-container">
        {imagesData.map((imageData, index) => (
          <div key={index}>
            <img src={imageData.src} alt={imageData.alt} className="small-image" />
            <p className="text-wrap">{imageData.text}</p>
            <div className="image-info">
              <p className="small-text">
                {imageData.type}
              </p>
              <p className="small-text">
                <span className="bullet-point">&#8226; </span>
                {imageData.time}
              </p>
              <p className="small-text">
                <span className="bullet-point">&#8226; </span>
                {imageData.date}
              </p>
              <div className="icon-container">
                <imageData.icon1 size={24} />
                <imageData.icon2 size={24} />
                <imageData.icon3 size={24} />
                <span className="tags-text">{imageData.tagsText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Base1;

