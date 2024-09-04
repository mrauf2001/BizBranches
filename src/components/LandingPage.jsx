// import React from "react";
// import { FaSearch, FaFilter, FaMapMarkerAlt } from "react-icons/fa";
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       <div className="overlay"></div>
//       <div className="content">
//         <h1>Pakistan #1 Biz Branches Directory</h1>
//         <p>
//           Find Bank Branches, Hospitals, Colleges, Universities, Clothing brands, Cricket Stadiums, Laboratories near you with complete information.
//         </p>
//         <div className="search-bar">
//           <div className="search-section">
//             <FaSearch className="icon" />
//             <input type="text" placeholder="KEYWORDS" />
//           </div>
//           <div className="search-section">
//             <FaFilter className="icon" />
//             <select>
//               <option>Filter by Category</option>
//               <option>Bank Branches</option>
//               <option>Hospitals</option>
//               <option>Colleges</option>
//               <option>Universities</option>
//               <option>Clothing Brands</option>
//               <option>Cricket Stadiums</option>
//               <option>Laboratories</option>
//             </select>
//           </div>
//           <div className="search-section">
//             <FaMapMarkerAlt className="icon" />
//             <input type="text" placeholder="Location" />
//           </div>
//           <button className="search-button">Search</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;





import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaFilter, FaMapMarkerAlt } from "react-icons/fa";
import './LandingPage.css';

const LandingPage = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`landing-container ${inView ? 'in-view' : ''}`}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Pakistan #1 Biz Branches Directory</h1>
        <p>
          Find Bank Branches, Hospitals, Colleges, Universities, Clothing brands, Cricket Stadiums, Laboratories near you with complete information.
        </p>
        <div className="search-bar">
          <div className="search-section">
            <FaSearch className="icon" />
            <input type="text" placeholder="KEYWORDS" />
          </div>
          <div className="search-section">
            <FaFilter className="icon" />
            <select>
              <option>Filter by Category</option>
              <option>Bank Branches</option>
              <option>Hospitals</option>
              <option>Colleges</option>
              <option>Universities</option>
              <option>Clothing Brands</option>
              <option>Cricket Stadiums</option>
              <option>Laboratories</option>
            </select>
          </div>
          <div className="search-section">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
