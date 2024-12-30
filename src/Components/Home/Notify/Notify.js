import React from "react";
import notifyStyles from "./notify.module.css";
const Notify = () => {
  return (
    <section className={notifyStyles.container}>
      <div className={notifyStyles.notifyLayer}>
        <h1>Get notified on each updates.</h1>
        <div className={notifyStyles.inputField}>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
      </div>
    </section>
  );
};

export default Notify;
