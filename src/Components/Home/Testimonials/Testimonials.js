import React from "react";
import Slider from "react-slick";
import testimonialsStyles from "./testimonials.module.css";
import p1 from "../../../Images/person_2.jpg.webp";
import p2 from "../../../Images/person_3.jpg.webp";
import p3 from "../../../Images/person_4.jpg.webp";

const testimonialsData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    message: "This service is fantastic! I couldn't be happier with the results.",
    image: p1,
  },
  {
    name: "Jane Smith",
    position: "Project Manager",
    message: "An amazing experience. I highly recommend it to everyone.",
    image: p2,
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    message: "A seamless process from start to finish. Highly professional.",
    image: p3,
  },
];

const CustomArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} ${testimonialsStyles.customArrow}`}
    onClick={onClick}
    style={{
      display: "block",
      color: "black",
    }}>
    {direction === "left" ? "❮" : "❯"}
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <div className={testimonialsStyles.sliderContainer}>
      <h2 className={testimonialsStyles.heading}>Testimonials</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={testimonialsStyles.slide}>
            <img src={testimonial.image} alt={testimonial.name} className={testimonialsStyles.image} />
            <h3 className={testimonialsStyles.name}>{testimonial.name}</h3>
            <p className={testimonialsStyles.message}>"{testimonial.message}"</p>
            <p className={testimonialsStyles.position}>{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
