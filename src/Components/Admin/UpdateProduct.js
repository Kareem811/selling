import React, { useState, useEffect } from "react";
import dashboardStyles from "./dashboard.module.css";
import axiosClient from "../../Utilities/axiosClient";
const UpdateProduct = ({ product, onClose, categories, doneFunction, doneState, state, setState }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    stock: product.stock,
    category_id: product.category_id,
  });
  useEffect(() => {
    setFormData({
      title: product.title,
      price: product.price,
      description: product.description,
      stock: product.stock,
      category_id: product.category_id,
    });
  }, [product]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...formData,
    };
    axiosClient
      .put(`/products/${product.id}`, updatedProduct)
      .then((res) => {
        res.data.msg === "updated successully" ? doneFunction(true) : doneFunction(false);
        setState("Updated");
        onClose();
      })
      .catch((err) => {
        console.error("Error updating product:", err);
      });
  };
  return (
    <>
      {doneState && (
        <div className={dashboardStyles.successContainer}>
          <div className={dashboardStyles.successContent}>
            <h1>{state} Successfully</h1>
            <button
              onClick={() => {
                window.location.href = window.location.pathname;
              }}>
              Confirm
            </button>
          </div>
        </div>
      )}
      <div className={dashboardStyles.updateFormContainer}>
        <div className={dashboardStyles.updateForm}>
          <h2>Update Product</h2>
          <form onSubmit={handleSubmit}>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="title">Product Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="category_id">Category</label>
              <select id="category_id" name="category_id" value={formData.category_id} onChange={handleChange} required>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="stock">Stock</label>
              <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} required />
            </div>
            <div className={dashboardStyles.formActions}>
              <button type="submit">Update</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
