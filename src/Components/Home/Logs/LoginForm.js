import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import formStyles from "./form.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../../Utilities/Context";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await login(formData);
    } catch (err) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className={formStyles.container}>
      <div className={formStyles.containerLayer}>
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <h1 className={formStyles.title}>SIGN IN</h1>
          {errorMessage && <p className={formStyles.error}>{errorMessage}</p>}
          <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} className={formStyles.input} />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className={formStyles.input} />
          <button type="submit" className={formStyles.button}>
            SIGN IN
          </button>
          <p className={formStyles.loginLink}>
            Don't have an account?{" "}
            <Link to="/register" className={formStyles.link}>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
