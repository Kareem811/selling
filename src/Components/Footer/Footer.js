// // Footer.js
// import React from "react";
// import footerStyles from "./footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={footerStyles.footer}>
//       <div className={footerStyles.footerContent}>
//         <div className={footerStyles.aboutUs}>
//           <h3>ABOUT US</h3>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
//         </div>
//         <div className={footerStyles.quickLinks}>
//           <h3>QUICK LINKS</h3>
//           <ul>
//             <li>
//               <a href="#">About Us</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Testimonials</a>
//             </li>
//             <li>
//               <a href="#">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div className={footerStyles.followUs}>
//           <h3>FOLLOW US</h3>
//           <ul className={footerStyles.socialIcons}>
//             <li>
//               <a href="#">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//             </li>{" "}
//             {/* Example using Font Awesome */}
//             <li>
//               <a href="#">
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className={footerStyles.featuredProduct}>
//           <h3>FEATURED PRODUCT</h3>
//           <div className={footerStyles.productImage}>
//             {/* Replace with your actual image */}
//             <img src="path/to/product-image.jpg" alt="Leather Brown Shoe" /> {/* Replace with your actual image path */}
//           </div>
//           <p className={footerStyles.productName}>Leather Brown Shoe</p>
//           <p className={footerStyles.productPrice}>$60.00</p>
//           <button className={footerStyles.addToCart}>ADD TO CART</button>
//         </div>
//       </div>
//       <div className={footerStyles.copyright}>
//         <p>Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import footerStyles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import p from "../../Images/product_1_bg.jpg.webp";
const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.aboutUs}>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div className={footerStyles.quickLinks}>
          <h3>Quick Links</h3>
          <ol>
            <li>
              <Link to={""}>About Us</Link>
            </li>
            <li>
              <Link to={""}>Services</Link>
            </li>
            <li>
              <Link to={""}>Testimonials</Link>
            </li>
            <li>
              <Link to={""}>Contact Us</Link>
            </li>
          </ol>
        </div>
        <div className={footerStyles.followUs}>
          <h3>Follow Us</h3>
          <div className={footerStyles.icons}>
            <Link to={""}>
              <FaFacebook size={20} color="gray" />
            </Link>
            <Link to={""}>
              <FaXTwitter size={20} color="gray" />
            </Link>
            <Link to={""}>
              <FaInstagram size={20} color="gray" />
            </Link>
            <Link to={""}>
              <FaLinkedin size={20} color="gray" />
            </Link>
          </div>
        </div>
        <div className={footerStyles.featuredProduct}>
          <h3>Featured Products</h3>
          <img src={p} alt="" />
          <span>Leather Brown Shoe</span>
          <h4>$60.00</h4>
          <button>Add To Cart</button>
        </div>
      </div>
      <p className={footerStyles.copyrights}>
        Copyright ©2025 All rights reserved | This template is made with by <Link to={""}>Kareem Ahmed</Link>
      </p>
    </footer>
  );
};

export default Footer;
