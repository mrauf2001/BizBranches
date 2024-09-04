// import React from 'react';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import PopularBranches from './components/PopularBranches';
// import Slider from './components/Slider';
// import ImageSection from './components/ImageSection';
// import StatsSection from './components/StatsSection';
// import TestimonialSlider from './components/TestimonialSlider';
// import Footer from './components/Footer';
// import Business from './components/catagories/Business';
// import ScrollToTop from './components/ScrollToTop';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HealthyFood from './components/branchList/HealthyFood'
// import SignInForm from './components/form/SignInForm';
// import PricingCards from './components/PricingCards/PricingCards';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <LandingPage />
//             <PopularBranches />
//             <Slider />
//             <ImageSection />
//             <StatsSection />
//             <TestimonialSlider />
//             <Footer />
          
//           </>
//         } />
//         <Route path="/business" element={<Business />} />
//         <Route path="/healthy" element={<HealthyFood />} />
//         <Route path="/form" element={<SignInForm />} />
//         <Route path="/add-listing" element={<PricingCards />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PopularBranches from './components/PopularBranches';
import Slider from './components/Slider';
import ImageSection from './components/ImageSection';
import StatsSection from './components/StatsSection';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import Business from './components/catagories/Business';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HealthyFood from './components/branchList/HealthyFood';
import SignInForm from './components/form/SignInForm';
import PricingCards from './components/PricingCards/PricingCards';
import './App.css'; // Import your CSS file

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust duration for the loading animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className={`app-content ${loaded ? 'fade-in' : 'fade-out'}`}>
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <PopularBranches />
              <Slider />
              <ImageSection />
              <StatsSection />
              <TestimonialSlider />
              <Footer />
            </>
          } />
          <Route path="/business" element={<Business />} />
          <Route path="/healthy" element={<HealthyFood />} />
          <Route path="/form" element={<SignInForm />} />
          <Route path="/add-listing" element={<PricingCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
