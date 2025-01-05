import React, { useEffect, useState } from "react";
import featuredStyles from "./featured.module.css";
import axios from "axios";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        const firstFiveProducts = res.data.slice(0, 5); // Get the first 5 products
        setProducts(firstFiveProducts);
        getRandomProducts(firstFiveProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  const getRandomProducts = (productsArray) => {
    if (productsArray.length >= 2) {
      const indices = new Set();
      while (indices.size < 2) {
        indices.add(Math.floor(Math.random() * productsArray.length));
      }
      const randomItems = Array.from(indices).map((index) => productsArray[index]);
      setRandomProducts(randomItems);
    }
  };

  return (
    <section className={featuredStyles.container}>
      <div className={featuredStyles.titles}>
        <span>Awesome Products</span>
        <h2>Our Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
      </div>
      <div className={featuredStyles.products}>
        {randomProducts.map((product, idx) => (
          <div style={idx === 1 ? { flexDirection: "row-reverse" } : undefined} key={product.id} className={featuredStyles.productCard}>
            <img src={product.images[0]} alt={product.title} />
            <div className={featuredStyles.productData}>
              <span>{`0${idx + 1}.`}</span>
              <h2>About This Product</h2>
              <p>{product.description}</p>
              <div className={featuredStyles.price}>
                <h4>Price:</h4>
                <p>
                  <del>${Math.round(Math.random() * 300)}</del> ${product.price}
                </p>
                <div className={featuredStyles.actions}>
                  <button>View Details</button>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
