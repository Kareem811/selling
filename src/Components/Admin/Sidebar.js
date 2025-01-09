import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import AuthContext from "../../Utilities/Context";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import dashboardStyles from "./dashboard.module.css";
const SideBar = ({ leftValue, asideIcon, asideTranslate, changeAsideStyle }) => {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      {asideIcon && <IoMenu onClick={() => changeAsideStyle()} className={dashboardStyles.menuIcon} size={32} color="#333" cursor={"pointer"} />}
      <aside onClick={() => changeAsideStyle()} style={{ left: `${leftValue}px` }}>
        <IoMdCloseCircle className={dashboardStyles.closeIcon} size={32} color="#fff" />
        <h2>Admin Panel</h2>
        <h5>{user.name}</h5>
        <ul>
          <li>
            <NavLink
              style={
                window.location.pathname === "/admin-dashboard"
                  ? {
                      background: "#d9534f",
                    }
                  : undefined
              }
              to={""}>
              <GrOverview size={17} color="#fff" />
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              style={
                window.location.pathname === "/admin-dashboard/products"
                  ? {
                      background: "#d9534f",
                    }
                  : undefined
              }
              to={"products"}>
              <AiOutlineProduct size={17} color="#fff" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              style={
                window.location.pathname === "/admin-dashboard/users"
                  ? {
                      background: "#d9534f",
                    }
                  : undefined
              }
              to={"users"}>
              <FaUserAlt size={17} color="#fff" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              style={
                window.location.pathname === "/admin-dashboard/messages"
                  ? {
                      background: "#d9534f",
                    }
                  : undefined
              }
              to={"messages"}>
              <LuMessageSquare size={17} color="#fff" />
              Messages
            </NavLink>
          </li>
          <li>
            <button onClick={() => logout()}>
              <FiLogOut size={17} color="#fff" />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
