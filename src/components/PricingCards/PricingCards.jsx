import React from 'react';
import './PricingCards.css';
import Footer from '../Footer';

const PricingCards = () => {
  return (
    <div className="pricing-section">
    <div id="business" className="header">
        <h1>Add Listing</h1>
        <p style={{color:'white'}}>Home {'>'} Listings {'>'} PricingCard</p>
      </div>
      <h2 className="section-title">Choose a package</h2>
      <div className="cards-container">
        <div className="card premium">
          <div className="card-header">
            <i className="fa fa-cube"></i>
            <h3>Premium</h3>
          </div>
          <div className="card-price">
            <sup>$</sup>170
          </div>
          <ul className="card-features">
            <li>Unlimited listing Post</li>
            <li>90 days expiration</li>
            <li>Featured Listing</li>
            <li>Edit Your Listing</li>
            <li>24/7 Email Support</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
        
        <div className="card standard">
          <div className="card-header">
            <i className="fa fa-star"></i>
            <h3>Standard</h3>
          </div>
          <div className="card-price">
            <sup>$</sup>110
          </div>
          <ul className="card-features">
            <li>30 listing Post</li>
            <li>60 days expiration</li>
            <li>Featured Listing</li>
            <li>Edit Your Listing</li>
            <li>24/7 Email Support</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
        
        <div className="card professional">
          <div className="card-header">
            <i className="fa fa-cog"></i>
            <h3>Professional</h3>
          </div>
          <div className="card-price">
            <sup>$</sup>20
          </div>
          <ul className="card-features">
            <li>10 listing Post</li>
            <li>30 days expiration</li>
            <li>Featured Listing</li>
            <li>Edit Your Listing</li>
            <li>24/7 Email Support</li>
          </ul>
          <button className="card-button">Get Started</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PricingCards;
