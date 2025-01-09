import React, { useEffect, useState } from "react";
import productsStyles from "./products.module.css";
import { IoIosSearch } from "react-icons/io";
import axiosClient from "../../Utilities/axiosClient";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { IoCart } from "react-icons/io5";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [distinctCategories, setDistinctCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    axiosClient
      .get(`/products`)
      .then((res) => {
        const productsData = res.data.products;
        setProducts(productsData);
        extractDistinctCategories(productsData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const extractDistinctCategories = (productsData) => {
    const categories = productsData.map((product) => product.category.name);
    const uniqueCategories = [...new Set(categories)];
    setDistinctCategories(uniqueCategories);
  };

  const renderProducts = () => {
    return products
      ?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
      .map((product, idx) => (
        <div className={productsStyles.product} key={idx}>
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
      ));
  };

  return (
    <section className={productsStyles.container}>
      <div className={productsStyles.titles}>
        <h2>Shop Now</h2>
        <div className={productsStyles.inputBox}>
          <IoIosSearch size={20} color="gray" />
          <input type="search" placeholder="What you're looking for" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={productsStyles.categories}>
            <ul>
              <li>
                <NavLink className={location.pathname === "/products" ? productsStyles.active : undefined} to="/products">
                  All
                </NavLink>
              </li>
              {distinctCategories
                .filter((category) => category.toLowerCase().includes(search.toLowerCase()))
                .map((category, index) => (
                  <li key={index}>
                    <NavLink to={`${category}`}>{category}</NavLink>
                  </li>
                ))}
            </ul>
          </div>
          <div className={productsStyles.products}>{location.pathname === "/products" ? renderProducts() : <Outlet />}</div>
        </>
      )}
    </section>
  );
};

export default AllProducts;
