import React from 'react';
import './Base2.css';
import { FaUserCircle, FaInfoCircle, FaTags } from 'react-icons/fa';
import oneImage from '../../Images/five.jpeg';
import twoImage from '../../Images/six.jpeg';
import threeImage from '../../Images/eight.jpeg';
import fourImage from '../../Images/nine.jpeg';

const Base2 = () => {
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
      tagsText: '(10)',
    },
    {
      src: twoImage,
      alt: 'Image 2',
      type: 'MP3',
      time: '50 mins',
      date: '2023-07-27',
      text: 'Introduction to Artificial intelligence for Project...',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(5)',
    },
    {
      src: threeImage,
      alt: 'HTML',
      type: 'LINK',
      time: '10 mins',
      date: '2023-07-27',
      text: 'John Seely Brown with HBR',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(30)',
    },
    {
      src: fourImage,
      alt: 'MP4',
      type: 'LINK',
      time: '2 mins',
      date: '2023-07-28',
      text: 'The Vendor Client relationship -in real...',
      icon1: FaUserCircle,
      icon2: FaInfoCircle,
      icon3: FaTags,
      tagsText: '(11)',
    },
  ];

  return (
    <div className="base-container">
      <div className="title">Managing The Profession(4)</div>
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

export default Base2;
