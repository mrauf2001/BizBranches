import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {

    navigate ('/')
  }
  const formClick = () => {

    navigate ('/form')
  }
  const pricingCardClick = () => {

    navigate ('/add-listing"')
  }

  return (
    <nav className="navbar container">
      <div className="navbar-left">
      <img width="160" height="32" src="https://bizbranches.pk/wp-content/uploads/2020/01/logo-light-2.png" class="attachment-full size-full wp-image-1483" alt="" decoding="async"/>
      </div>
      <div className="navbar-center">
        <ul className="navbar-items">
          <li onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
            <Link onClick={handleClick} to ="/">Home</Link>
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
        <Link onClick={formClick} to="/form">Sign In or Register</Link>
        <Link onClick={pricingCardClick} to="/add-listing" className="add-listing">+ Add Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
