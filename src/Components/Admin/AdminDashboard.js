// // import React from "react";
// // import dashboardStyles from "./dashboard.module.css";
// // const AdminDashboard = () => {
// //   return (
// //     <div className={dashboardStyles.dashboard}>
// //       <aside className={dashboardStyles.sidebar}>
// //         <h2 className={dashboardStyles.logo}>Admin Panel</h2>
// //         <nav className={dashboardStyles.nav}>
// //           <ul>
// //             <li>
// //               <a href="/dashboard/overview">Overview</a>
// //             </li>
// //             <li>
// //               <a href="/dashboard/users">Manage Users</a>
// //             </li>
// //             <li>
// //               <a href="/dashboard/products">Manage Products</a>
// //             </li>
// //             <li>
// //               <a href="/dashboard/orders">Orders</a>
// //             </li>
// //             <li>
// //               <a href="/dashboard/settings">Settings</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </aside>
// //       <main className={dashboardStyles.main}>
// //         <header className={dashboardStyles.header}>
// //           <h1>Welcome to Admin Dashboard</h1>
// //         </header>
// //         <section className={dashboardStyles.content}>
// //           <div className={dashboardStyles.card}>
// //             <h3>Total Users</h3>
// //             <p>1,234</p>
// //           </div>
// //           <div className={dashboardStyles.card}>
// //             <h3>Total Products</h3>
// //             <p>567</p>
// //           </div>
// //           <div className={dashboardStyles.card}>
// //             <h3>Total Orders</h3>
// //             <p>890</p>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// import React from "react";
// import dashboardStyles from "./dashboard.module.css";

// const AdminDashboard = () => {
//   return (
//     <div className={dashboardStyles.dashboard}>
//       {/* Sidebar */}
//       <aside className={dashboardStyles.sidebar}>
//         <h2 className={dashboardStyles.logo}>Admin Panel</h2>
//         <nav className={dashboardStyles.nav}>
//           <ul>
//             <li>
//               <a href="/dashboard/overview">Overview</a>
//             </li>
//             <li>
//               <a href="/dashboard/users">Users</a>
//             </li>
//             <li>
//               <a href="/dashboard/products">Products</a>
//             </li>
//             <li>
//               <a href="/dashboard/reports">Reports</a>
//             </li>
//             <li>
//               <a href="/dashboard/settings">Settings</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={dashboardStyles.main}>
//         <header className={dashboardStyles.header}>
//           <h1>Dashboard</h1>
//           <div className={dashboardStyles.userInfo}>
//             <p>Welcome, Admin</p>
//           </div>
//         </header>
//         <section className={dashboardStyles.grid}>
//           <div className={dashboardStyles.card}>
//             <h3>Users</h3>
//             <p>1,245</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Products</h3>
//             <p>532</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Sales</h3>
//             <p>$12,345</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Revenue</h3>
//             <p>$67,890</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useContext } from "react";
// import dashboardStyles from "./dashboard.module.css";
// import AuthContext from "../../Utilities/Context";

// const AdminDashboard = () => {
//   const { logout } = useContext(AuthContext);
//   return (
//     <div className={dashboardStyles.dashboard}>
//       <aside className={dashboardStyles.sidebar}>
//         <h2 className={dashboardStyles.logo}>Admin Panel</h2>
//         <nav className={dashboardStyles.nav}>
//           <ul>
//             <li>
//               <a href="/dashboard/overview">Overview</a>
//             </li>
//             <li>
//               <a href="/dashboard/users">Users</a>
//             </li>
//             <li>
//               <a href="/dashboard/products">Products</a>
//             </li>
//             <li>
//               <a href="/dashboard/reports">Reports</a>
//             </li>
//             <li>
//               <a href="/dashboard/settings">Settings</a>
//             </li>
//             <li>
//               <button onClick={() => logout()}>Logout</button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={dashboardStyles.main}>
//         <header className={dashboardStyles.header}>
//           <h1>Dashboard</h1>
//           <div className={dashboardStyles.userInfo}>
//             <p>Welcome, Admin</p>
//           </div>
//         </header>
//         <section className={dashboardStyles.grid}>
//           <div className={dashboardStyles.card}>
//             <h3>Users</h3>
//             <p>1,245</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Products</h3>
//             <p>532</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Sales</h3>
//             <p>$12,345</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Revenue</h3>
//             <p>$67,890</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import dashboardStyles from "./dashboard.module.css";
// import AuthContext from "../../Utilities/Context";

// const AdminDashboard = () => {
//   const { logout , user } = useContext(AuthContext);

//   return (
//     <div className={dashboardStyles.dashboard}>
//       {/* Sidebar */}
//       <aside className={dashboardStyles.sidebar}>
//         <h2 className={dashboardStyles.logo}>Admin Panel</h2>
//         <nav className={dashboardStyles.nav}>
//           <ul>
//             <li>
//               <Link to="/dashboard/overview">Overview</Link>
//             </li>
//             <li>
//               <Link to="/dashboard/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/dashboard/products">Products</Link>
//             </li>
//             <li>
//               <Link to="/dashboard/reports">Reports</Link>
//             </li>
//             <li>
//               <Link to="/dashboard/settings">Settings</Link>
//             </li>
//             <li>
//               <button className={dashboardStyles.logoutButton} onClick={() => logout()}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={dashboardStyles.main}>
//         <header className={dashboardStyles.header}>
//           <h1>Dashboard</h1>
//           <div className={dashboardStyles.userInfo}>
//             <p>Welcome, {user.name}</p>
//           </div>
//         </header>
//         <section className={dashboardStyles.grid}>
//           <div className={dashboardStyles.card}>
//             <h3>Users</h3>
//             <p>1,245</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Products</h3>
//             <p>532</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Sales</h3>
//             <p>$12,345</p>
//           </div>
//           <div className={dashboardStyles.card}>
//             <h3>Revenue</h3>
//             <p>$67,890</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dashboardStyles from "./dashboard.module.css";
import AuthContext from "../../Utilities/Context";
import { FaBars, FaThList } from "react-icons/fa";

const AdminDashboard = () => {
  const { logout, user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={dashboardStyles.dashboard}>
      <aside className={`${dashboardStyles.sidebar} ${menuOpen ? dashboardStyles.open : ""}`}>
        <h2 className={dashboardStyles.logo}>Admin Panel</h2>
        <nav className={dashboardStyles.nav}>
          <ul>
            <li>
              <Link to="/dashboard/overview" onClick={closeMenu}>
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" onClick={closeMenu}>
                Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/products" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reports" onClick={closeMenu}>
                Reports
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" onClick={closeMenu}>
                Settings
              </Link>
            </li>
            <li>
              <button
                className={dashboardStyles.logoutButton}
                onClick={() => {
                  logout();
                  closeMenu();
                }}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <div className={`${dashboardStyles.menuToggle} ${menuOpen ? dashboardStyles.open : ""}`} onClick={toggleMenu}>
        {window.innerWidth <= 768 && !menuOpen ? <FaBars className={dashboardStyles.menuIcon} /> : <FaThList className={dashboardStyles.menuIcon} />}
      </div>

      <main className={dashboardStyles.main}>
        <header className={dashboardStyles.header}>
          <h1>Dashboard</h1>
          <div className={dashboardStyles.userInfo}>
            <p>Welcome, {user.name}</p>
          </div>
        </header>

        <section className={dashboardStyles.content}>
          <div className={dashboardStyles.grid}>
            <div className={dashboardStyles.card}>
              <h3>Users</h3>
              <p>1,245</p>
            </div>
            <div className={dashboardStyles.card}>
              <h3>Products</h3>
              <p>532</p>
            </div>
            <div className={dashboardStyles.card}>
              <h3>Sales</h3>
              <p>$12,345</p>
            </div>
            <div className={dashboardStyles.card}>
              <h3>Revenue</h3>
              <p>$67,890</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;