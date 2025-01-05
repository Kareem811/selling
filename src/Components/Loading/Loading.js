import React from "react";
import loadingStyles from "./loading.module.css";
const Loading = () => {
  return (
    <section className={loadingStyles.loading}>
      <span className={loadingStyles.loader}></span>
    </section>
  );
};

export default Loading;
