import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div id="listing-maps" className="listing-map">
      <h2 className="widget-title">
        <span>Maps</span>
      </h2>
      <div className="top-nav">
        <a href="#maps" className="direction-map active">
          <i className="fas fa-map"></i>
          <span>Map</span>
        </a>
        <a href="#maps-street" className="direction-map">
          <i className="fas fa-street-view"></i>
          <span>Street View</span>
        </a>
        <a
          href="http://maps.google.com/maps?q=32-62+31st+St+Queens%2C+NY&amp;zoom=14&amp;size=512x512&amp;maptype=roadmap&amp;sensor=false"
          className="direction-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-hand-point-right"></i>
          <span>Get Directions</span>
        </a>
      </div>
      <div id="apus-listing-map" className="map">
        {/* Map content or integration can be added here */}
        <p>Map Placeholder</p>
      </div>
    </div>
  );
}

export default Map;
