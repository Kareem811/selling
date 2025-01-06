// // Sidebar Component
// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import dashboardStyles from "./dashboard.module.css";
// import AuthContext from "../../Utilities/Context";

// const Sidebar = ({ menuOpen, toggleMenu, closeMenu }) => {
//   const { logout } = useContext(AuthContext);

//     return (
//         //     <aside className={`${dashboardStyles.sidebar} ${menuOpen ? dashboardStyles.open : ""}`}>
//         //       <h2 className={dashboardStyles.logo}>Admin Panel</h2>
//         //       <nav className={dashboardStyles.nav}>
//         //         <ul>
//         //           <li>
//         //             <NavLink className={window.location.pathname === "/admin-dashboard" && dashboardStyles.active} to="/admin-dashboard" onClick={closeMenu}>
//         //               Overview
//         //             </NavLink>
//         //           </li>
//         //           <li>
//         //             <NavLink to="/admin-dashboard/users" onClick={closeMenu}>
//         //               Users
//         //             </NavLink>
//         //           </li>
//         //           <li>
//         //             <NavLink to="/admin-dashboard/products" onClick={closeMenu}>
//         //               Products
//         //             </NavLink>
//         //           </li>
//         //           <li>
//         //             <NavLink to="/admin-dashboard/reports" onClick={closeMenu}>
//         //               Reports
//         //             </NavLink>
//         //           </li>
//         //           <li>
//         //             <NavLink to="/admin-dashboard/settings" onClick={closeMenu}>
//         //               Settings
//         //             </NavLink>
//         //           </li>
//         //           <li>
//         //             <button
//         //               className={dashboardStyles.logoutButton}
//         //               onClick={() => {
//         //                 logout();
//         //                 closeMenu();
//         //               }}>
//         //               Logout
//         //             </button>
//         //           </li>
//         //         </ul>
//         //       </nav>
//         //     </aside>
//         //   );
//         <>

//         </>
//     );
// };

// export default Sidebar;

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
const SideBar = ({ leftValue, user, asideIcon, asideTranslate, changeAsideStyle }) => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      {asideIcon && <IoMenu onClick={() => changeAsideStyle()} className={dashboardStyles.menuIcon} size={32} color="#333" cursor={"pointer"} />}
      <aside onClick={() => changeAsideStyle()} style={{ left: `${leftValue}px` }}>
        <IoMdCloseCircle className={dashboardStyles.closeIcon} size={32} color="#fff" />
        <h2>Admin Panel</h2>
        <h5>{user}</h5>
        <ul>
          <li>
            <NavLink to={"overview"}>
              <GrOverview size={17} color="#fff" />
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to={"products"}>
              <AiOutlineProduct size={17} color="#fff" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"users"}>
              <FaUserAlt size={17} color="#fff" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to={"messages"}>
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
