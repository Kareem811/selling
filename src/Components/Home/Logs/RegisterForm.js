import React, { useState } from "react";
import formStyles from "./form.module.css";
import { Link } from "react-router-dom";
import axiosClient from "../../../Utilities/axiosClient";
import Loading from "../../Loading/Loading";
const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Australia",
  "Brazil",
  "Russia",
  "South Africa",
  "Egypt",
  "Saudi Arabia",
  "Italy",
  "Spain",
  "Argentina",
  "Netherlands",
  "Sweden",
  "Singapore",
  "South Korea",
  "New Zealand",
  "Nigeria",
  "Kenya",
  "Norway",
];

const SignUpForm = () => {
  const [state, setState] = useState(``);
  const [country, setCountry] = useState(``);
  const [confirmPassword, setConfrimPassword] = useState(``);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    phone: ``,
    termsAccepted: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    phone: "",
    termsAccepted: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrors({});

    if (formData.password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    if (!formData.termsAccepted) {
      setErrorMessage("You must accept the terms of service to proceed.");
      return;
    }
    setLoading(true);
    axiosClient
      .post("/register", formData)
      .then((res) => {
        res.status === 201 ? setDone(true) : setDone(false);
        res.status === 201 ? setLoading(false) : setLoading(true);
      })
      .catch((err) => {
        if (err.response && err.response.data.errors) {
          setErrors(err.response.data.errors);
        } else {
          setErrorMessage("Something went wrong!");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className={formStyles.container}>
      {loading ? <Loading /> : undefined}
      {done ? (
        <div className={formStyles.doneContainer}>
          <div className={formStyles.doneContent}>
            <h3>Registed Successfully</h3>
            <h5>Welcome {formData.name}</h5>
            <button onClick={() => setDone(false)}>Confirm</button>
          </div>
        </div>
      ) : undefined}
      <div className={formStyles.containerLayer}>
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <h1 className={formStyles.title}>CREATE ACCOUNT</h1>
          {errorMessage && <p className={formStyles.error}>{errorMessage}</p>}

          <div>
            <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} className={formStyles.input} />
            {errors.name && <p className={formStyles.error}>{errors.name}</p>}
          </div>

          <div>
            <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} className={formStyles.input} />
            {errors.email && <p className={formStyles.error}>{errors.email}</p>}
          </div>

          <div>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className={formStyles.input} />
            {errors.password && <p className={formStyles.error}>{errors.password}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Repeat your password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfrimPassword(e.target.value)}
              className={formStyles.input}
            />
          </div>

          <div>
            <select name="gender" value={formData.gender} onChange={handleChange} className={formStyles.input}>
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className={formStyles.error}>{errors.gender}</p>}
          </div>

          <div className={formStyles.inlineInputs}>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={state}
              onChange={(e) => {
                const newState = e.target.value;
                setState(newState);
                setFormData({
                  ...formData,
                  address: `${newState}, ${country}`,
                });
              }}
              className={`${formStyles.input} ${formStyles.inlineInput}`}
            />
            <select
              name="country"
              value={country}
              onChange={(e) => {
                const newCountry = e.target.value;
                setCountry(newCountry);
                setFormData({
                  ...formData,
                  address: `${state}, ${newCountry}`,
                });
              }}
              className={`${formStyles.input} ${formStyles.inlineInput}`}>
              <option value="" disabled>
                Country
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.address && <p className={formStyles.error}>{errors.address}</p>}
          </div>

          <div>
            <input type="tel" placeholder="Your Phone" name="phone" value={formData.phone} onChange={handleChange} className={formStyles.input} />
            {errors.phone && <p className={formStyles.error}>{errors.phone}</p>}
          </div>

          <div className={formStyles.terms}>
            <input type="checkbox" id="terms" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label htmlFor="terms">
              I agree all statements in{" "}
              <Link to="/terms-of-service" className={formStyles.link}>
                Terms of service
              </Link>
            </label>
            {errors.termsAccepted && <p className={formStyles.error}>{errors.termsAccepted}</p>}
          </div>

          <button type="submit" className={formStyles.button}>
            SIGN UP
          </button>

          <p className={formStyles.loginLink}>
            Have already an account?{" "}
            <Link to="/login" className={formStyles.link}>
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
