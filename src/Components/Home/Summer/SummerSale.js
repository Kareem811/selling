import React from "react";
import summerStyles from "./summer.module.css";
import { Link } from "react-router-dom";
const SummerSale = () => {
  return (
    <section className={summerStyles.container}>
      <div className={summerStyles.layer}>
        <span className={summerStyles.summerTitle}>Special Promo</span>
        <h2>Summer Sale</h2>
        <p>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        <div className={summerStyles.cards}>
          <div className={summerStyles.card}>
            <span>00</span>
            <span>Weeks</span>
          </div>
          <div className={summerStyles.card}>
            <span>00</span>
            <span>Days</span>
          </div>
          <div className={summerStyles.card}>
            <span>00</span>
            <span>Hr</span>
          </div>
          <div className={summerStyles.card}>
            <span>00</span>
            <span>Min</span>
          </div>
          <div className={summerStyles.card}>
            <span>00</span>
            <span>Sec</span>
          </div>
        </div>
        <Link to={""}>Shop Now</Link>
      </div>
    </section>
  );
};

export default SummerSale;
