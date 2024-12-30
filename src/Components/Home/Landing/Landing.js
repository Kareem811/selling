import React from "react";
import landingStyles from "./landing.module.css";
import landingImage from "../../../Images/landing.webp";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className={landingStyles.container}>
      <img src={landingImage} alt="" loading="lazy" />
      <div className={landingStyles.landingLayer}>
        <div className={landingStyles.landingData}>
          <h1>Shop With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
          <div className={landingStyles.buttons}>
            <Link to={""}>Shop Now</Link>
            <Link to={""}>Club Membership</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
