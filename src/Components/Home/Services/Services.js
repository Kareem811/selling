import React, { useState } from "react";
import servicesStyles from "./services.module.css";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaTag } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { IoCloudDone } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";

const Services = () => {
  const [services] = useState([
    {
      name: "Business Consulting",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <LuBriefcaseBusiness size={40} color="orangered" />,
    },
    {
      name: "Market Analysis",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <FaTag size={40} color="orangered" />,
    },
    {
      name: "User Monitoring",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <MdAvTimer size={40} color="orangered" />,
    },
    {
      name: "Seller Consulting",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <MdOutlineSystemSecurityUpdateGood size={40} color="orangered" />,
    },
    {
      name: "Financial Investment",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <IoBagCheck size={40} color="orangered" />,
    },
    {
      name: "Financial Management",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      icon: <IoCloudDone size={40} color="orangered" />,
    },
  ]);
  return (
    <section className={servicesStyles.container}>
      <div className={servicesStyles.titles}>
        <span>Our Services</span>
        <h2>We Offer Services</h2>
      </div>
      <div className={servicesStyles.services}>
        {services.map((el, idx) => (
          <div key={idx} className={servicesStyles.service}>
            {el.icon}
            <div className={servicesStyles.serviceContent}>
              <h2>{el.name}</h2>
              <p>{el.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
