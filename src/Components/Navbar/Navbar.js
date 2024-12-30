import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import navStyles from "./nav.module.css";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [menuSize, setMenuSize] = useState(window.innerWidth <= 1120);
  const [bigMenu, setBigMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(window.scrollY >= 100);
  const checkMenu = (size) => {
    setMenuSize(size <= 1120);
  };
  const checkScroll = (scroll) => {
    setNavScroll(scroll >= 100);
  };
  useEffect(() => {
    const handleResize = () => {
      checkMenu(window.innerWidth);
    };
    const handleScroll = () => {
      checkScroll(window.scrollY);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const changeMenu = () => {
    setBigMenu(!bigMenu);
  };
  return (
    <>
      <header>
        <div className={navStyles.headerContent}>
          <div className={navStyles.headerIcons}>
            <Link to="">
              <FaFacebookF size={28} color="#fff" />
            </Link>
            <Link to="">
              <FaXTwitter size={28} color="#fff" />
            </Link>
            <Link to="">
              <FaInstagram size={28} color="#fff" />
            </Link>
            <Link to="">
              <FaLinkedin size={28} color="#fff" />
            </Link>
          </div>
          <div className={navStyles.headerInfo}>
            <div className={navStyles.dataInfo}>
              <FaPhoneAlt size={20} color="orangered" />
              +12 3456 7890
            </div>
            <div className={navStyles.dataInfo}>
              <IoMdMail size={20} color="orangered" />
              info@example.com
            </div>
          </div>
        </div>
      </header>
      <nav className={navScroll ? navStyles.navScroll : undefined}>
        <div className={navStyles.navContent}>
          <Link className={navStyles.navTitle} to="/">
            Selling <span>.</span>
          </Link>
          <ul className={bigMenu ? navStyles.bigMenu : undefined} style={menuSize ? { display: "none" } : { display: "flex" }}>
            {bigMenu ? <IoIosCloseCircle className={navStyles.closeIcon} onClick={() => changeMenu()} size={30} cursor={"pointer"} color="orangered" /> : undefined}
            <li>
              <NavLink to="/home" className={({ isActive }) => (isActive || window.location.pathname === "/" ? navStyles.active : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? navStyles.active : undefined)}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? navStyles.active : undefined)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? navStyles.active : undefined)}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? navStyles.active : undefined)}>
                Contact
              </NavLink>
            </li>
          </ul>
          {menuSize ? <IoMenuOutline size={30} cursor={"pointer"} color="#000" onClick={() => changeMenu()} /> : undefined}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
