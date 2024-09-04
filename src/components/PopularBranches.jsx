import React from "react";
import "./PopularBranches.css";
import { FaCheckCircle, FaPhone, FaHeart } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const PopularBranches = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const navigate = useNavigate(); // Initialize the navigate function

  const handleCardClick = () => {
    navigate('/healthy'); // Navigate to the Description component
  };

  return (
    <div ref={ref} className={`popular-branches-section ${inView ? 'in-view' : ''}`}>
      <h2>
        Top & Popular <span className="highlight">Branches</span>
      </h2>
      <p className="description">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
      </p>
      <div className="card-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} style={{width:'300px'}} className="card" onClick={handleCardClick}> {/* Add the onClick handler */}
            <div className="card-image">
              <img
                src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlOlcwiMIqPtuoFlUGY9ur17IjfrYaOVhGpa59j7hSyFDj7u9N' // Replace with actual image paths
                alt="Branch"
              />
              <div className="price-tag">100$ - 120$</div>
              <div className="rating">4.5</div>
              <div className="save">
                <FaHeart /> Save
              </div>
            </div>
            <div className="card-content">
              <div className="profile-image">
                <img style={{display:'inline-block'}}
                  src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSM-BDh6YBh9tJdv7trzhKOtLkGQ8W8J9v2ptKQAY6LFm4hy4uW' // Replace with actual profile image paths
                  alt="Profile"
                /> 
              </div>
              <div className="imgicon">
                <h3>Mehwish B</h3> <FaCheckCircle  className="tick-icon" />
                </div>
                <div className="luxury">
              <h3>Outdoor, luxury for you</h3>
              <p>New York, USA</p>
              <p>
                <FaPhone /> +89-456-8*** show
              </p>
              </div>
              <div className="card-footer">
                <div className="left">
                  <span>Education</span>
                  <div className="more">
                    +2
                    <div className="tooltip">
                      <p>Name 1</p>
                      <p>Name 2</p>
                    </div>
                  </div>
                </div>
                <div className="right">Open</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBranches;
