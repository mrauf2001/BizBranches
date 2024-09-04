// import React, { useState } from 'react';
// import './Slider.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap, faBriefcase, faUtensils, faBasketballBall, faFilm, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const navigate = useNavigate(); // Hook to navigate programmatically

//     const cards = [
//         {
//             title: "Business",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/business-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faBriefcase
//         },
//         {
//             title: "Education",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/education-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faGraduationCap
//         },
//         {
//             title: "Food Restaurants",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/food-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faUtensils
//         },
//         {
//             title: "Sports",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/sport-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faBasketballBall
//         },
//         {
//             title: "Entertainment",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/travel-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faFilm
//         },
//         {
//             title: "Travel & Tour",
//             image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/shopping-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
//             logo: faGlobe
//         }
//     ];

//     const cardsPerPage = 3;

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => 
//             (prevIndex + cardsPerPage) % cards.length
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => 
//             (prevIndex - cardsPerPage + cards.length) % cards.length
//         );
//     };

//     const currentCards = cards.slice(currentIndex, currentIndex + cardsPerPage).length === cardsPerPage 
//         ? cards.slice(currentIndex, currentIndex + cardsPerPage) 
//         : cards.slice(currentIndex).concat(cards.slice(0, cardsPerPage - cards.slice(currentIndex).length));

//     const handleCardClick = (title) => {
//         if (title === "Business") {
//             navigate('/business');
//         }
//         // Add more navigation logic for other cards if needed
//     };

//     return (
//         <div className="slider-container">
//             <div className="overlayz">   <h2 className="slider-heading">Most Popular Categories</h2>
//             <p className="slider-paragraph">
//                 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
//             </p>
//             <div className="slider">
//                 <div className="arrowz"><button className="arrow left-arrow" onClick={prevSlide}>
//                     <FaArrowLeft />
//                 </button></div> 
//                 <div className="slider-wrapper">
//                     {currentCards.map((card, index) => (
//                         <div key={index} className="card" onClick={() => handleCardClick(card.title)}>
//                             <div className="card-image">
//                                 <img src={card.image} alt={card.title} className="card-img" />
//                                 <div className="card-logo">
//                                     <FontAwesomeIcon icon={card.logo} size="3x" color="#FF1300" />
//                                 </div>
//                             </div>
//                             <div className="card-content">
//                                 <h3 className="card-title">{card.title}</h3>
//                                 <button className="card-button">Browse</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="arrowz"><button className="arrow right-arrow" onClick={nextSlide}>
//                     <FaArrowRight />
//                 </button></div>  
//             </div></div>
         
//         </div>
//     );
// };

// export default Slider;




import React, { useState } from 'react';
import './Slider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faUtensils, faBasketballBall, faFilm, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const cards = [
        {
            title: "Business",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/business-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faBriefcase
        },
        {
            title: "Education",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/education-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faGraduationCap
        },
        {
            title: "Food Restaurants",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/food-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faUtensils
        },
        {
            title: "Sports",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/sport-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faBasketballBall
        },
        {
            title: "Entertainment",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/travel-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faFilm
        },
        {
            title: "Travel & Tour",
            image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/elementor/thumbs/shopping-ol6nnis36honxlms8boqkxdyt65xj62iqnwnujxyto.jpg",
            logo: faGlobe
        }
    ];

    const cardsPerPage = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + cardsPerPage) % cards.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - cardsPerPage + cards.length) % cards.length
        );
    };

    const currentCards = cards.slice(currentIndex, currentIndex + cardsPerPage).length === cardsPerPage 
        ? cards.slice(currentIndex, currentIndex + cardsPerPage) 
        : cards.slice(currentIndex).concat(cards.slice(0, cardsPerPage - cards.slice(currentIndex).length));

    const handleCardClick = (title) => {
        if (title === "Business") {
            navigate('/business');}

        else if (title === "Education") {
            navigate('/business');}

        else if (title === "Food Restaurants") {
            navigate('/business');}

        else if (title === "Travel & Tour") {
            navigate('/business');
        }
        else if (title === "Entertainment") {
            navigate('/business');
        }
        else if (title === "Sports") {
            navigate('/business');
        }
        // Add more navigation logic for other cards if needed
    };

    return (
        <div className="slider-container">
            <div className="overlayz">   
                <h2 className="slider-heading">Most Popular Categories</h2>
                <p className="slider-paragraph">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                </p>
                <div className="slider">
                    <div className="arrowz">
                        <button className="arrow left-arrow" onClick={prevSlide}>
                            <FaArrowLeft />
                        </button>
                    </div> 
                    <div className="slider-wrapper">
                        {currentCards.map((card, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(card.title)}>
                                <div className="card-image">
                                    <img src={card.image} alt={card.title} className="card-img" />
                                    <div className="card-logo">
                                        <FontAwesomeIcon icon={card.logo} size="3x" color="#FF1300" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{card.title}</h3>
                                    <button className="card-button">Browse</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrowz">
                        <button className="arrow right-arrow" onClick={nextSlide}>
                            <FaArrowRight />
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Slider;
