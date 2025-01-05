import AddProduct from "../Components/Admin/AddProduct";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import ShowMessages from "../Components/Admin/ShowMessages";
import ShowProducts from "../Components/Admin/ShowProducts";
import UpdateProduct from "../Components/Admin/UpdateProduct";

export const roles = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "/add-product",
    element: <AddProduct />,
    role: "admin",
  },
  {
    path: "/show-products",
    element: <ShowProducts />,
    role: "admin",
  },
  {
    path: "/update-product/:productid",
    element: <UpdateProduct />,
    role: "admin",
  },
  {
    path: "/show-messages",
    element: <ShowMessages />,
    role: "admin",
  },
];
