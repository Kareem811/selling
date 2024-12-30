import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Landing from "../Components/Home/Landing/Landing";
import OurProducts from "../Components/Home/Our Products/OurProducts";
import Notify from "../Components/Home/Notify/Notify";
import Featured from "../Components/Home/Featured Products/Featured";
import AboutUs from "../Components/Home/About/AboutUs";
import Team from "../Components/Home/Team/Team";
import SummerSale from "../Components/Home/Summer/SummerSale";
import Services from "../Components/Home/Services/Services";
import Testnimonials from "../Components/Home/Testimonials/Testimonials";
import ContactSection from "../Components/Home/Contact/ContactSection";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <OurProducts />
      <Notify />
      <Featured />
      <AboutUs />
      <Team />
      <SummerSale />
      <Services />
      <Testnimonials />
      <ContactSection />
      <Footer/>
    </>
  );
};

export default Home;
