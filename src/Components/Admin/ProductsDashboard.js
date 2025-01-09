// import React, { useEffect, useState } from "react";
// import dashboardStyles from "./dashboard.module.css";
// import axiosClient from "../../Utilities/axiosClient";
// import Loading from "../Loading/Loading";
// import { FaCartFlatbed } from "react-icons/fa6";
// import { RiAlignItemBottomFill } from "react-icons/ri";
// import { BiSolidCategoryAlt } from "react-icons/bi";
// import UpdateProduct from "./UpdateProduct";
// const ProductsDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [sum, setSum] = useState({});
//   const [categories, setCategories] = useState([]);
//   const [productToUpdate, setProductToUpdate] = useState(null);
//   const [done, setDone] = useState(false);
//   const [state, setState] = useState(``);
//   useEffect(() => {
//     axiosClient
//       .get("/products")
//       .then((res) => {
//         console.log(res.data.data);
//         setProducts(res.data.data);
//         setSum({
//           stock: +res.data.stock,
//           categories: +res.data.categories,
//         });
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//     axiosClient
//       .get("/categories")
//       .then((res) => {
//         setCategories(res.data.categories || []);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (productId) => {
//     setLoading(true);
//     axiosClient
//       .delete(`/products/${productId}`)
//       .then((res) => {
//         if (res.status === 204) {
//           setLoading(false);
//           setDone(true);
//           setState(`Deleted`);
//         } else {
//           setLoading(true);
//           setDone(false);
//         }
//       })
//       .catch(() => setLoading(true));
//   };
//   const handleUpdate = (product) => {
//     setProductToUpdate(product);
//   };
//   const handleUpdateClose = () => {
//     setProductToUpdate(null);
//   };
//   return (
//     <div className={dashboardStyles.tableContainer}>
//       {done && (
//         <div className={dashboardStyles.successContainer}>
//           <div className={dashboardStyles.successContent}>
//             <h1>{state} Successfully</h1>
//             <button
//               onClick={() => {
//                 window.location.href = window.location.pathname;
//               }}>
//               Confirm
//             </button>
//           </div>
//         </div>
//       )}
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           <div className={dashboardStyles.dataInformation}>
//             <div className={dashboardStyles.singleInfo}>
//               <FaCartFlatbed size={70} color="#d9534f" />
//               <div>
//                 Available Products
//                 <h3>
//                   {products.length} {products.length > 1 ? "Products" : "Product"}
//                 </h3>
//               </div>
//             </div>
//             <div className={dashboardStyles.singleInfo}>
//               <RiAlignItemBottomFill size={70} color="#d9534f" />
//               <div>
//                 Stock
//                 <h3>
//                   {sum.stock} {sum.stock > 1 ? "Items" : "Item"}
//                 </h3>
//               </div>
//             </div>
//             <div className={dashboardStyles.singleInfo}>
//               <BiSolidCategoryAlt size={70} color="#d9534f" />
//               <div>
//                 Available Categories
//                 <h3>
//                   {sum.categories} {sum.categories > 1 ? "Categories" : "Category"}
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Description</th>
//                 <th>No. of Images</th>
//                 <th>Created At</th>
//                 <th>Stock</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.id}</td>
//                   <td>{product.title}</td>
//                   <td>{product.price}</td>
//                   <td>{product.category.name}</td>
//                   <td>{product.description}</td>
//                   <td>{product.images.length}</td>
//                   <td>{new Date(product.created_at).toLocaleDateString()}</td>
//                   <td>{product.stock}</td>
//                   <td className={dashboardStyles.actions}>
//                     <button onClick={() => handleDelete(product.id)}>Delete</button>
//                     <button onClick={() => handleUpdate(product)}>Update</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {productToUpdate && <UpdateProduct state={state} setState={setState} doneState={done} doneFunction={setDone} product={productToUpdate} onClose={handleUpdateClose} categories={categories} />}
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductsDashboard;

import React, { useEffect, useState } from "react";
import axiosClient from "../../Utilities/axiosClient";
import Loading from "../Loading/Loading";
import { FaCartFlatbed } from "react-icons/fa6";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import UpdateProduct from "./UpdateProduct";
import dashboardStyles from "./dashboard.module.css"; // Use the provided module
import { Outlet } from "react-router-dom";

const ProductsDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sum, setSum] = useState({});
  const [categories, setCategories] = useState([]);
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [done, setDone] = useState(false);
  const [state, setState] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get(`/products?page=${currentPage}`);
        setProducts(response.data.data);
        setTotalPages(Math.ceil(response.data.total / 10));
        setSum(response.data.summary || {});
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();

    axiosClient
      .get("/categories")
      .then((res) => setCategories(res.data.categories || []))
      .catch((err) => console.error(err));
  }, [currentPage]);

  const handleDelete = async (productId) => {
    setLoading(true);
    try {
      const res = await axiosClient.delete(`/products/${productId}`);
      if (res.status === 204) {
        setLoading(false);
        setDone(true);
        setState("Deleted");
        setCurrentPage(1); // Reset to first page after delete
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setDone(true);
      setState("Error");
    }
  };

  const handleUpdate = (product) => {
    setProductToUpdate(product);
  };

  const handleUpdateClose = () => {
    setProductToUpdate(null);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={dashboardStyles.tableContainer}>
        {done && (
          <div className={dashboardStyles.successContainer}>
            <div className={dashboardStyles.successContent}>
              <h1>{state} Successfully</h1>
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
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={dashboardStyles.dataInformation}>
              <div className={dashboardStyles.singleInfo}>
                <FaCartFlatbed size={70} color="#d9534f" />
                <div>
                  Available Products
                  <h3>
                    {products.length} {products.length > 1 ? "Products" : "Product"}
                  </h3>
                </div>
              </div>
              <div className={dashboardStyles.singleInfo}>
                <RiAlignItemBottomFill size={70} color="#d9534f" />
                <div>
                  Stock
                  <h3>
                    {sum.stock} {sum.stock > 1 ? "Items" : "Item"}
                  </h3>
                </div>
              </div>
              <div className={dashboardStyles.singleInfo}>
                <BiSolidCategoryAlt size={70} color="#d9534f" />
                <div>
                  Available Categories
                  <h3>
                    {sum.categories} {sum.categories > 1 ? "Categories" : "Category"}
                  </h3>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>No. of Images</th>
                  <th>Created At</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category?.name}</td> {/* Use optional chaining */}
                    <td>{product.description}</td>
                    <td>{product.images?.length}</td> {/* Use optional chaining */}
                    <td>{new Date(product.created_at).toLocaleDateString()}</td>
                    <td>{product.stock}</td>
                    <td className={dashboardStyles.actions}>
                      <button onClick={() => handleDelete(product.id)}>Delete</button>
                      <button onClick={() => handleUpdate(product)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={dashboardStyles.pagination}>
              <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
              {pageNumbers.map((page) => (
                <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? dashboardStyles.activePage : dashboardStyles.pageButton}>
                  {page}
                </button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </div>
            {productToUpdate && (
              <UpdateProduct state={state} setState={setState} doneState={done} doneFunction={setDone} product={productToUpdate} onClose={handleUpdateClose} categories={categories} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductsDashboard;
