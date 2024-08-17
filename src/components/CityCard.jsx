import React from 'react';
import './CityCard.css';

const CityCard = ({ image, title, listings }) => {
  return (
    <div className="city-card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-overlay">
        <div className="card-info">
          <span className="listings">{listings} Listings</span>
          <h2>{title}</h2>
          <p>Get All Listing</p>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
