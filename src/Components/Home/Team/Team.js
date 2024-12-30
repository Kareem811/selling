import React, { useState } from "react";
import teamStyles from "./team.module.css";
import p1 from "../../../Images/person_2.jpg.webp";
import p2 from "../../../Images/person_3.jpg.webp";
import p3 from "../../../Images/person_4.jpg.webp";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Team = () => {
  const [persons] = useState([
    {
      name: "John Rooster",
      title: "Co-Founder, President",
      description: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: p1,
    },
    {
      name: "Tom Sharp",
      title: "Co-Founder, COO",
      description: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: p2,
    },
    {
      name: "Winston Hodson",
      title: "Marketing",
      description: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: p3,
    },
  ]);
  return (
    <section className={teamStyles.container}>
      <div className={teamStyles.titles}>
        <span>Team</span>
        <h2>Leadership</h2>
      </div>
      <div className={teamStyles.team}>
        {persons.map((el, idx) => (
          <div className={teamStyles.card} key={idx}>
            <img src={el.image} alt="" />
            <h3>{el.name}</h3>
            <span>{el.title}</span>
            <p>{el.description}</p>
            <div className={teamStyles.links}>
              <Link to={""}>
                <FaFacebookF size={15} color="#fff" />
              </Link>
              <Link to={""}>
                <FaXTwitter size={15} color="#fff" />
              </Link>
              <Link to={""}>
                <FaInstagram size={15} color="#fff" />
              </Link>
              <Link to={""}>
                <FaLinkedin size={15} color="#fff" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
