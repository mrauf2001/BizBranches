// import React from "react";
// import "./Navbar.css"; // Import the CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img width="160" height="32" src="https://bizbranches.pk/wp-content/uploads/2020/01/logo-light-2.png" class="attachment-full size-full wp-image-1483" alt="" decoding="async"/>
//       </div>
//       <div className="navbar-center">
//         <ul className="navbar-items">
//           <li><a href="/">Home</a></li>
//           <li><a href="/listings">Listings</a></li>
//           <li><a href="/blogs">Blogs</a></li>
//           <li><a href="/pages">Pages</a></li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <a href="/signin">Sign In or Register</a>
//         <a href="/add-listing" className="add-listing">+ Add Listing</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img width="160" height="32" src="https://bizbranches.pk/wp-content/uploads/2020/01/logo-light-2.png" class="attachment-full size-full wp-image-1483" alt="" decoding="async"/>
      </div>
      <div className="navbar-center">
        <ul className="navbar-items">
          <li onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
            <a href="/">Home</a>
            {dropdown === "home" && (
              <ul className="dropdown">
                <li><a href="/home1">Home 1</a></li>
                <li><a href="/home2">Home 2</a></li>
                <li><a href="/home3">Home 3</a></li>
                <li><a href="/home4">Home 4</a></li>
                <li><a href="/home5">Home 5</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter("listings")} onMouseLeave={handleMouseLeave}>
            <a href="/listings">Listings</a>
            {dropdown === "listings" && (
              <ul className="dropdown">
                <li><a href="/listings-full">Listings-Full</a></li>
                <li><a href="/listings-sidebar">Listings-Sidebar</a></li>
                <li><a href="/listings-half">Listings-Half Map</a></li>
                <li><a href="/listings-list">Listings-List</a></li>
                <li><a href="/listings-details">Listings-Details</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter("blogs")} onMouseLeave={handleMouseLeave}>
            <a href="/blogs">Blogs</a>
            {dropdown === "blogs" && (
              <ul className="dropdown">
                <li><a href="/blog-sidebar">Blog-Sidebar</a></li>
                <li><a href="/blog-full">Blog-Full</a></li>
                <li><a href="/blog-list">Blog-List</a></li>
                <li><a href="/blog-detail">Blog-Detail</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEnter("pages")} onMouseLeave={handleMouseLeave}>
            <a href="/pages">Pages</a>
            {dropdown === "pages" && (
              <ul className="dropdown">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/signin">Sign In or Register</a>
        <a href="/add-listing" className="add-listing">+ Add Listing</a>
      </div>
    </nav>
  );
};

export default Navbar;
