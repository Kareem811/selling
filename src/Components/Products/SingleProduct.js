import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../Utilities/axiosClient";
import productsStyles from "./products.module.css";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Home/Testimonials/Testimonials";
import { IoCart } from "react-icons/io5";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { cat, pid } = useParams();
  const [currentImage, setCurrentImage] = useState(``);
  useEffect(() => {
    axiosClient
      .get(`/products/${cat}/${pid}`)
      .then((res) => {
        setProduct(res.data);
        setCurrentImage(res.data.category.image);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [cat, pid]);

  const getImage = (x) => setCurrentImage(x);
  const renderImages = () => {
    if (!product.images) return <p>No images available for this product.</p>;

    try {
      const imagesArray = JSON.parse(product.images);
      return (
        <>
          {imagesArray.map((sora, index) => (
            <img onClick={() => setCurrentImage(sora)} key={index} src={`${sora}`} alt={`${index + 1}`} className={productsStyles.singleProductImage} />
          ))}
        </>
      );
    } catch (err) {
      console.error("Error parsing images:", err);
      return <p>Error loading product images.</p>;
    }
  };
  const [discount, setDiscount] = useState(Math.round(Math.random() * 100));
  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className={productsStyles.container}>
          <div style={{ justifyContent: "flex-start", padding: `20px 50px` }} className={productsStyles.titles}>
            <h2 style={{ fontSize: `25px` }}>
              <span>{product.category.name}</span> / {product.title}
            </h2>
          </div>
          <div className={productsStyles.productContent}>
            <div className={productsStyles.productImages}>
              <div className={productsStyles.subImages}>{renderImages()}</div>
              <div className={productsStyles.mainImage}>
                <img src={currentImage} alt="" />
              </div>
            </div>
            <div className={productsStyles.productData}>
              <h2>{product.title}</h2>
              <h4>{product.category.name}</h4>
              <p>{product.description}</p>
              <span>
                <b>
                  <del>${(discount * product.price * 0.1).toFixed(2)}</del>
                </b>{" "}
                | ${product.price}{" "}
              </span>
              <b>
                Discount up to <span style={{ color: "orangered" }}>%{discount}</span>
              </b>
              <button>
                <IoCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
          <Testimonials />
        </section>
      )}
      <Footer />
    </>
  );
};

export default SingleProductPage;
