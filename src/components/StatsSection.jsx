import React, { useEffect, useState } from 'react';
import './StatsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faDiagramProject, faFaceSmile, faMugSaucer } from '@fortawesome/free-solid-svg-icons'; // Use solid version temporarily

const StatsSection = () => {
  const [awards, setAwards] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [coffee, setCoffee] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 200, 2500, setAwards);
    animateValue(0, 307, 2500, setProjects);
    animateValue(0, 700, 2500, setClients);
    animateValue(0, 770, 2500, setCoffee);
  }, []);

  return (
    <div className="stats-section">
      <div className="stat-item">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faTrophy} />
        </div>
        <h2>{awards}+</h2>
        <p>Awards Winning</p>
      </div>
      <div className="stat-item">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faDiagramProject} />
        </div>
        <h2>{projects}+</h2>
        <p>Done Projects</p>
      </div>
      <div className="stat-item">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faFaceSmile} />
        </div>
        <h2>{clients}+</h2>
        <p>Happy Clients</p>
      </div>
      <div className="stat-item">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faMugSaucer} />
        </div>
        <h2>{coffee}+</h2>
        <p>Cups of Coffee</p>
      </div>
    </div>
  );
};

export default StatsSection;
