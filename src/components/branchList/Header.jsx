// src/components/Header.js
import React from 'react';
import { FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import './BranchList.css'

function Header() {
  return (
    <div className="header">
     <div className="overlay">
     <div className="background-image">
      <h2 style={{color: 'white', fontSize:'3rem', display:'flex', justifyContent:'center', paddingTop:'100px',paddingRight:'100px' }}>Healthy Food</h2>
        {/* Background image */}
         <div className="profile-info">
        <div className="hfood">
          <h2 style={{color:'red'}}>Healthy Food</h2>
          <p  style={{color:'red'}}>Vegan Restaurant</p>
        </div>
        <img src="/person.jpg" alt="User Avatar" className="avatar" />
        <div className="actions">
          <button><FaBookmark /> Save</button>
          <button><FaShareAlt /> Share</button>
          <div id="rating">
            <FaStar /> 3.8
          </div>
        </div>
      </div>
      </div>

     </div>
    </div>
  );
}

export default Header;
