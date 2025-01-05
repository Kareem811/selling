import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../../Utilities/axiosClient";
import productsStyles from "./products.module.css";
import Loading from "../Loading/Loading";
import { IoCart } from "react-icons/io5";

const Category = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(`/products/category/${cat}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [cat]);

  if (loading) {
    return <Loading />;
  }

  return products.length > 0 ? (
    products.map((product , idx) => (
      <div key={product.id} className={productsStyles.product}>
        <img src={product.category.image} alt={product.category.name} className={productsStyles.productImage} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category.name}</p>
        <div className={productsStyles.actions}>
          <button>
            <IoCart size={20} />
            Add to Cart
          </button>
          <Link to={`/products/${product.category.name}/${idx + 1}`}>Read More</Link>
        </div>
      </div>
    ))
  ) : (
    <p>No products found in this category.</p>
  );
};

export default Category;
