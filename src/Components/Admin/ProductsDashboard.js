// import React, { useContext, useEffect, useState } from "react";
// import dashboardStyles from "./dashboard.module.css";
// import Sidebar from "./Sidebar";
// import Loading from "../Loading/Loading";
// import axiosClient from "../../Utilities/axiosClient";
// import AuthContext from "../../Utilities/Context";

// const ProductsDashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // State to handle sidebar toggle

//   useEffect(() => {
//     axiosClient
//       .get("/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setLoading(false);
//       });
//   }, []);

//   // Function to toggle the sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <section className={dashboardStyles.dashboard}>
//       <Sidebar isOpen={sidebarOpen} />
//       {loading ? (
//         <Loading />
//       ) : (
//         <main className={`${dashboardStyles.main} ${sidebarOpen ? dashboardStyles.menuClosed : ""}`}>
//           <header className={dashboardStyles.header}>
//             <h1>Dashboard</h1>
//             <div className={dashboardStyles.userInfo}>
//               <p>Welcome, {user.name}</p>
//             </div>
//             {/* Hamburger Icon */}
//             <div className={dashboardStyles.menuToggle} onClick={toggleSidebar}>
//               <span className={dashboardStyles.menuIcon}></span>
//               <span className={dashboardStyles.menuIcon}></span>
//               <span className={dashboardStyles.menuIcon}></span>
//             </div>
//           </header>
//           <section className={dashboardStyles.content}>
//             <table className={dashboardStyles.userTable}>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Category</th>
//                   <th>Description</th>
//                   <th>Stock</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((el, idx) => (
//                   <tr key={idx}>
//                     <td>{el.id}</td>
//                     <td>{el.title}</td>
//                     <td>${el.price}</td>
//                     <td>{el.category.name}</td>
//                     <td>{el.description}</td>
//                     <td>{el.stock}</td>
//                     <td className={dashboardStyles.actions}>
//                       <button style={{ background: "darkred" }}>Delete</button>
//                       <button>Update</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         </main>
//       )}
//     </section>
//   );
// };

// export default ProductsDashboard;
import React from 'react'

const ProductsDashboard = () => {
  return (
    <div>ProductsDashboard</div>
  )
}

export default ProductsDashboard