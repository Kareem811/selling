import React, { useContext, useEffect, useState } from "react";
import dashboardStyles from "./dashboard.module.css";
import SideBar from "./Sidebar";
import AuthContext from "../../Utilities/Context";
import axiosClient from "../../Utilities/axiosClient";
import Loading from "../Loading/Loading";
import { Link, Outlet } from "react-router-dom";
const AdminDashboard = () => {
  const [asideTranslate, setAsideTranslate] = useState(false);
  const [asideIcon, setAsideIcon] = useState(false);
  const [leftValue, setLeftValue] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const changeAsideStyle = () => {
    setAsideTranslate(!asideTranslate);
    setAsideIcon(!asideIcon);
    asideTranslate ? setLeftValue(0) : setLeftValue(-250);
  };
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosClient
      .get(`/data`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className={dashboardStyles.dashboard}>
      <SideBar leftValue={leftValue} asideIcon={asideIcon} asideTranslate={asideTranslate} changeAsideStyle={changeAsideStyle} user={user.name} />
      <div className={dashboardStyles.content} style={leftValue === -250 ? { width: `100%` } : { marginLeft: `250px` }}>
        <div className={dashboardStyles.dashboardHeader} style={leftValue === -250 ? { width: `95%` } : undefined}>
          <h3>Dashboard</h3>
          <p>Welcome, {user.name}</p>
        </div>
        <div className={dashboardStyles.dashboardData} style={leftValue === -250 ? { width: `95%` } : undefined}>
          <div className={dashboardStyles.dashboardContainer}>
            <div className={dashboardStyles.dashboardLinks}>
              <Link to={"users"} className={`${dashboardStyles.card} ${window.location.pathname === "/admin-dashboard/users" ? dashboardStyles.active : undefined}`}>
                <h3>Users</h3>
              </Link>
              <Link to={"products"} className={`${dashboardStyles.card} ${window.location.pathname === "/admin-dashboard/products" ? dashboardStyles.active : undefined}`}>
                <h3>Products</h3>
              </Link>
              <Link to={"orders"} className={`${dashboardStyles.card} ${window.location.pathname === "/admin-dashboard/orders" ? dashboardStyles.active : undefined}`}>
                <h3>Orders</h3>
              </Link>
              <Link to={"revenues"} className={`${dashboardStyles.card} ${window.location.pathname === "revenues" ? dashboardStyles.active : undefined}`}>
                <h3>Revenues</h3>
              </Link>
              <Link to={"messages"} className={`${dashboardStyles.card} ${window.location.pathname === "/admin-dashboard/messages" ? dashboardStyles.active : undefined}`}>
                <h3>Messages</h3>
              </Link>
            </div>
            {loading ? <Loading /> : <Outlet />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
