import React from 'react';
import './BranchList.css' // Ensure you reference the correct path to your CSS file

const Photo = () => {
  return (
    <div className="photos-wrapper">
      <h3 className="widget-title">Photos</h3>
      <div className="listing-photos">
        
        {/* Main Image Carousel */}
        <div className="photo-carousel">
          <button className="slick-prev">
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>

          <div className="carousel-images">
            <div className="image-item">
              <div className="image-wrapper">
                <img
                  src="https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/l-4-ol6nnis591mdhkkf01oqrf36f3y0qsqrpbibhr599c.jpg"
                  alt="Main Photo 1"
                />
              </div>
            </div>

            {/* Additional images go here */}
          </div>

          <button className="slick-next">
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>

        {/* Thumbnail Carousel */}
        <div className="thumbnail-carousel">
          <div className="thumbnail-item">
            <div className="thumbnail-wrapper">
              <img
                src="https://www.demoapus-wp1.com/findus/wp-content/uploads/2020/01/l-4-100x100.jpg"
                alt="Thumbnail 1"
              />
            </div>
          </div>

          {/* Additional thumbnails go here */}
        </div>
      </div>
    </div>
  );
};

export default Photo;
