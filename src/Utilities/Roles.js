import AdminDashboard from "../Components/Admin/AdminDashboard";
import ProductsDashboard from "../Components/Admin/ProductsDashboard";
import ShowMessages from "../Components/Admin/ShowMessages";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import Users from "../Components/Admin/Users";
export const roles = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    role: "admin",
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <ProductsDashboard />,
      },
    ],
  },
  // {
  //   path: "admin-dashboard/products",
  //   element: <ProductsDashboard />,
  //   role: "admin",
  // },
  // {
  //   path: "/add-product",
  //   element: <AddProduct />,
  //   role: "admin",
  // },
  // {
  //   path: "/show-products",
  //   element: <ShowProducts />,
  //   role: "admin",
  // },
  // {
  //   path: "admin-dashboard/products/update-product/:productid",
  //   element: <UpdateProduct />,
  //   role: "admin",
  // },
  // {
  //   path: "admin-dashboard/users",
  //   element: <Users />,
  //   role: "admin",
  // },
  // {
  //   path: "admin-dashboard/show-messages",
  //   element: <ShowMessages />,
  //   role: "admin",
  // },
];
