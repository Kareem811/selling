import React from "react";
import aboutStyles from "./about.module.css";
import { Link } from "react-router-dom";
import aboutImg from "../../../Images/about.webp";
const AboutUs = () => {
  return (
    <section className={aboutStyles.container}>
      <img src={aboutImg} alt="" />
      <div className={aboutStyles.aboutData}>
        <span>Merchant Company</span>
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
        <Link to={""}>Learn More</Link>
      </div>
    </section>
  );
};

export default AboutUs;
