import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Utilities/Context";
import adminNavStyles from "./adminnav.module.css";
const AdminNavbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <header className={adminNavStyles.header}>
      <Link to={"/admin-dashboard"}>
        <b>Dashboard</b>
      </Link>
      <ul>
        <li>
          <NavLink to={"/admin-dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/admin-dashboard/users"}>Users</NavLink>
        </li>
        <li>
          <NavLink to={"/admin-dashboard/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/admin-dashboard/messages"}>Messages</NavLink>
        </li>
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
      </ul>
    </header>
  );
};

export default AdminNavbar;
