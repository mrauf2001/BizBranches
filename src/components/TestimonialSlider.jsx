import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; // CSS for the slider component

const testimonials = [
  {
    id: 1,
    name: "Rout Millance",
    role: "Web Designer",
    image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/2020/01/user-1.png",
    quote: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit..."
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Graphic Designer",
    image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/2020/01/user-2.jpg",
    quote: "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation..."
  },
  {
    id: 3,
    name: "John Smith",
    role: "Software Engineer",
    image: "https://www.demoapus-wp1.com/findus/wp-content/uploads/2020/01/user-4.jpg",
    quote: "Duis Aute Irure Dolor In Reprehenderit In Voluptate..."
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="testimonial-slider">
      <h2>
        What Say <span className="highlight">Our Customers</span>
      </h2>
      <p className="description">
        At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="slide">
            <img  src={testimonial.image} alt={testimonial.name} className="avatar" />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
            <p className="quote">{testimonial.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
