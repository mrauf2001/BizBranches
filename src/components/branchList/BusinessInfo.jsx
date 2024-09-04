// src/components/BusinessInfo.js
import React from 'react';
import './BranchList.css'
function BusinessInfo() {
  return (
    <div className="business-info">
      <h3>Business Info</h3>
      <p>34-23 Steinway St Queens, NY</p>
      <div className="hours">
        <p><strong>Today:</strong> Open 8:00 AM - 10:00 PM</p>
        {/* Add more days */}
      </div>
    </div>
  );
}

export default BusinessInfo;
