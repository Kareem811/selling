import React, { useState, useEffect, useRef } from "react";
import dashboardStyles from "./dashboard.module.css";
import axiosClient from "../../Utilities/axiosClient";

const AddProduct = () => {
  const [doneState, setDoneState] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    stock: "",
    category_id: "",
    images: [],
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    axiosClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: [...e.target.files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (const key in formData) {
      if (key === "images") {
        formData.images.forEach((image) => {
          data.append("images[]", image);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axiosClient.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setDoneState(true);
        setFormData({
          title: "",
          price: "",
          description: "",
          stock: "",
          category_id: "",
          images: [],
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        console.error("Error creating product:", response.data);
      }
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  const handleCancel = () => {
    setDoneState(false);
    setFormData({
      title: "",
      price: "",
      description: "",
      stock: "",
      category_id: "",
      images: [],
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {doneState && (
        <div className={dashboardStyles.successContainer}>
          <div className={dashboardStyles.successContent}>
            <h1>Added Successfully</h1>
            <button
              style={{ backgroundColor: "#d9534f", color: "#fff" }}
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
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="title">Product Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="slug">Product Slug</label>
              <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} required />
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
            <div className={dashboardStyles.formGroup}>
              <label htmlFor="images">Product Images</label>
              <input
                type="file"
                id="images"
                name="images"
                multiple // Allow multiple file selection
                onChange={handleImageChange}
                ref={fileInputRef}
                className={dashboardStyles.fileInput} // Apply styles
              />
            </div>
            <div className={dashboardStyles.formActions}>
              <button type="submit">Add Product</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
