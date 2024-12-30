import React from "react";
import contactStyles from "./contact.module.css";

const ContactSection = () => {
  return (
    <section className={contactStyles.contactSection}>
      <div className={contactStyles.container}>
        <div className={contactStyles.headingWrapper}>
          <h5 className={contactStyles.subTitle}>CONTACT FORM</h5>
          <h2 className={contactStyles.mainTitle}>Get In Touch</h2>
        </div>
        <form className={contactStyles.form}>
          <div className={contactStyles.row}>
            <div className={contactStyles.inputGroup}>
              <input type="text" className={contactStyles.input} placeholder="First Name" />
            </div>
            <div className={contactStyles.inputGroup}>
              <input type="text" className={contactStyles.input} placeholder="Last Name" />
            </div>
          </div>
          <div className={contactStyles.inputGroup}>
            <input type="email" className={contactStyles.input} placeholder="Email" />
          </div>
          <div className={contactStyles.inputGroup}>
            <input type="text" className={contactStyles.input} placeholder="Subject" />
          </div>
          <div className={contactStyles.inputGroup}>
            <textarea className={contactStyles.textarea} placeholder="Write your notes or questions here..." rows="5"></textarea>
          </div>
          <button type="submit" className={contactStyles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
