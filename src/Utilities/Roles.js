// import AddProduct from "../Components/Admin/AddProduct";
// import AdminDashboard from "../Components/Admin/AdminDashboard";
// import Orders from "../Components/Admin/Orders";
// import ProductsDashboard from "../Components/Admin/ProductsDashboard";
// import SingleOrder from "../Components/Admin/SingleOrder";
// import Users from "../Components/Admin/Users";
// export const roles = [
//   {
//     path: "/admin-dashboard",
//     element: <AdminDashboard />,
//     role: "admin",
//     children: [
//       {
//         path: "users",
//         element: <Users />,
//       },
//       {
//         path: "products",
//         element: <ProductsDashboard />,
//         // children: [
//         //   {
//         //     path: "/admin-dashboard/products/addproduct",
//         //     element: <AddProduct />,
//         //   },
//         // ],
//       },
//       {
//         path: "orders",
//         element: <Orders />,
//       },
//     ],
//   },
//   {
//     path: "/admin-dashboard/orders/:orderId",
//     element: <SingleOrder />,
//     role: "admin",
//   },
//   // {
//   //   path: "/admin-dashboard/products/addproduct",
//   //   element: <AddProduct />,
//   //   role: "admin",
//   // },
// ];

import AddProduct from "../Components/Admin/AddProduct";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import Orders from "../Components/Admin/Orders";
import ProductsDashboard from "../Components/Admin/ProductsDashboard";
import SingleOrder from "../Components/Admin/SingleOrder";
import Users from '../Components/Admin/Users'
export const roles = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    role: "admin",
    children: [
      {
        path: "users", // Relative path: /admin-dashboard/users
        element: <Users />,
      },
      {
        path: "products", // Relative path: /admin-dashboard/products
        element: <ProductsDashboard />,
        children: [
          {
            path: "add-product", // Relative path: /admin-dashboard/products/addproduct
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "orders", // Relative path: /admin-dashboard/orders
        element: <Orders />,
      },
    ],
  },
  {
    path: "/admin-dashboard/orders/:orderId",
    element: <SingleOrder />,
    role: "admin",
  },
];