import React from 'react';
import './ImageSection.css';

const ImageSection = () => {
  const images = [
    { city: 'LONDON', listings: '1 listing', text: 'Get it all', imgSrc: 'https://via.placeholder.com/600x400' },
    { city: 'PARIS', listings: '1 listing', text: 'Get it all', imgSrc: 'https://via.placeholder.com/600x400' },
    { city: 'NEW YORK', listings: '1 listing', text: 'Get it all', imgSrc: 'https://via.placeholder.com/600x400' },
    { city: 'TOKYO', listings: '1 listing', text: 'Get it all', imgSrc: 'https://via.placeholder.com/600x400' }
  ];

  return (
    <div className="image-section">
      <div className="image-row">
        <div className="image-wrapper large">
          <img src='https://cdn.pixabay.com/photo/2022/12/28/21/10/night-7683839_960_720.jpg' alt={images[0].city} />
          <div className="image-overlay">
            <span className="listing">{images[0].listings}</span>
            <h2>{images[0].city}</h2>
            <p>{images[0].text}</p>
          </div>
        </div>
        <div className="image-wrapper small">
          <img className='parisImg' src='https://media.istockphoto.com/id/1508316088/photo/qingcheng-park-and-urban-skyline-hohhot-inner-mongolia-china.jpg?s=2048x2048&w=is&k=20&c=xd5vfu-VMWjnP3tN3AAwpxqlXOZ6dQ1PdhtLMQZPTOw=' alt={images[1].city} />
          <div className="image-overlay">
            <span className="listing">{images[1].listings}</span>
            <h2>{images[1].city}</h2>
            <p>{images[1].text}</p>
          </div>
        </div>
      </div>
      <div className="image-row">
        <div className="image-wrapper small">
          <img src='https://cdn.pixabay.com/photo/2023/08/04/22/59/sunset-8170058_1280.jpg' alt={images[2].city} />
          <div className="image-overlay">
            <span className="listing">{images[2].listings}</span>
            <h2>{images[2].city}</h2>
            <p>{images[2].text}</p>
          </div>
        </div>
        <div style={{paddingLeft:'20px'}} className="image-wrapper large">
          <img src='https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg' alt={images[3].city} />
          <div className="image-overlay">
            <span className="listing">{images[3].listings}</span>
            <h2>{images[3].city}</h2>
            <p>{images[3].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
