import React, { useEffect, useState } from "react";
import ourProductsStyles from "./ourproducts.module.css";
import axios from "axios";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setProducts(res.data);
        const initialFavorites = res.data.slice(0, 6).reduce((acc, _, idx) => {
          acc[idx] = Math.round(Math.random() * 1000);
          return acc;
        }, {});
        setFavorites(initialFavorites);
      })
      .catch((err) => console.log(err));
  }, []);

  const incrementFavorite = (idx) => {
    setFavorites((prev) => ({
      ...prev,
      [idx]: prev[idx] + 1,
    }));
  };

  return (
    <section className={ourProductsStyles.container}>
      <div className={ourProductsStyles.titles}>
        <span>Popular Products</span>
        <h1>Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
      </div>
      <div className={ourProductsStyles.products}>
        {products.slice(0, 6).map((el, idx) => (
          <div key={idx} className={ourProductsStyles.product}>
            <div className={ourProductsStyles.border}></div>
            <div className={ourProductsStyles.productImage}>
              <img src={el.images[0]} alt={el.title} loading="lazy" />
            </div>
            <h4>{el.title}</h4>
            <div className={ourProductsStyles.fav}>
              <MdOutlineFavorite onClick={() => incrementFavorite(idx)} color="red" size={20} cursor="pointer" />
              <span>{favorites[idx]}</span>
            </div>
            <div className={ourProductsStyles.actions}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/products`}>Explore</Link>
    </section>
  );
};

export default OurProducts;
