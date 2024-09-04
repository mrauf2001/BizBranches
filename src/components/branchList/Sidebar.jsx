// src/components/Sidebar.js
import React from 'react';
import Map from './Map';
import './BranchList.css'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="business-info">
        <h3>Business Info</h3>
        <p><strong>Location:</strong> 343 3rd St, Queens, NY</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@healthyfood.com</p>
      </div>

      <div className="sidebar-map">
        <h3>Map</h3>
        <Map />
      </div>

      <div className="business-hours">
        <h3>Business Hours</h3>
        <ul>
          <li>Monday: 8:00 AM - 10:00 PM</li>
          <li>Tuesday: 8:00 AM - 10:00 PM</li>
          <li>Wednesday: 8:00 AM - 10:00 PM</li>
          <li>Thursday: 8:00 AM - 10:00 PM</li>
          <li>Friday: 8:00 AM - 11:00 PM</li>
          <li>Saturday: 8:00 AM - 11:00 PM</li>
          <li>Sunday: 8:00 AM - 10:00 PM</li>
        </ul>
      </div>

      <div className="listing-amenities">
        <h3>Listing Amenities</h3>
        <ul>
          <li>Accepts Credit Cards</li>
          <li>Outdoor Seating</li>
          <li>WiFi Available</li>
          <li>Parking</li>
          <li>Smoking Allowed</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
