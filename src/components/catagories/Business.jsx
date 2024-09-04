import React from "react";
import "./Business.css";
import BusinessCard from "./BusinessCard";
import Footer from "../Footer";

const Business = () => {
  return (
    <div className="business-container">
      <div id="business" className="header">
        <h1>Business</h1>
        <p style={{color:'white'}}>Home {'>'} Listings {'>'} Business</p>
      </div>

      <div className="contentt">
        <div className="sidebar">
          <div className="filter">
            <input type="text" placeholder="Keywords..." />
            <select>
              <option>Business</option>
            </select>
            <select>
              <option>Filter by type</option>
            </select>
            <select>
              <option>Filter by country</option>
            </select>
            <select>
              <option>Filter by city</option>
            </select>
            <select>
              <option>Location</option>
            </select>
            <div className="slider">
              <label>RADIUS: 0 KM</label>
              <input type="range" min="0" max="100" />
            </div>
            <div className="slider">
              <label>Price: $0 - $1,000,000</label>
              <input type="range" min="0" max="1000000" />
            </div>
            <div className="features">
              <label>
                <input type="checkbox" /> Accepts Credit Cards
              </label>
              <label>
                <input type="checkbox" /> Alarm System
              </label>
              {/* Add other checkboxes similarly */}
            </div>
            <button className="filter-btn">FILTER</button>
            <p>Showing results for: Category: Business</p>
            <button className="reset-btn">Reset</button>
          </div>
        </div>

        <div className="main-content">
          <div className="result-header">
            <p>4 Results Found (Showing 1 - 4)</p>
            <select>
              <option>Default Order</option>
            </select>
          </div>
          <div className="cardbusiness">
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Business;
