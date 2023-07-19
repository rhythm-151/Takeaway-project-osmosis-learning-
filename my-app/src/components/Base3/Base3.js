import React from 'react';
import './Base3.css';
import { FaUserCircle, FaInfoCircle, FaTags } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import oneImage from '../../Images/five.jpeg';
import twoImage from '../../Images/ten.jpeg';
import threeImage from '../../Images/two.jpeg';
import fourImage from '../../Images/new.jpeg';
import fiveImage from '../../Images/last.jpeg';

const Base3 = () => {
  const imagesData = [
    {
      src: oneImage,
      type: 'MP3',
      time: '50 mins',
      date: '2023-07-25',
      text: 'Successfully Manage Hybrid and Remote...',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(30)',
    },
    {
      src: twoImage,
      alt: 'Image 2',
      type: 'LINK',
      time: '5 mins',
      date: '2023-07-26',
      text: 'What are epics,user stories and story point?',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(23)',
    },
    {
      src: threeImage,
      alt: 'HTML',
      type: 'LINK',
      time: '0 mins',
      date: '2023-07-27',
      text: 'Timeless Leadership Principles And Their...',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(13)',
    },
    {
      src: fourImage,
      alt: 'MP4',
      type: 'LINK',
      time: '4 mins',
      date: '2023-07-28',
      text: 'Scheduling your priorities',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(13)',
    },
    {
      src: fiveImage,
      alt: 'MP3',
      type: 'LINK',
      time: '5 mins',
      date: '2023-07-29',
      text: 'When Waterfall Principle Sneak Back...',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(29)',
    },
  ];

  return (
    <div className="base-container">
      <div className="title">
        Soft Sklls For Project Management(14)
      </div>
      <div className="arrow-icons">
        <AiOutlineArrowLeft size={24} />
        <AiOutlineArrowRight size={24} />
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

export default Base3;