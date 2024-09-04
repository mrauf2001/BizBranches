import React from 'react';
import Description from './Description'
import Photos from './Photos'
import Header from './Header'
import Sidebar from './Sidebar'
import Map from './Map'
import './BranchList.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="contenttt">
        <div className="main-content">
          <Description />
          <Map />
          <Photos />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
