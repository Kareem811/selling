import React, { useEffect, useState } from "react";
import dashboardStyles from "./dashboard.module.css";
import axiosClient from "../../Utilities/axiosClient";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { RiSecurePaymentFill } from "react-icons/ri";

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      .get("/orders")
      .then((res) => {
        console.log(res);
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={dashboardStyles.tableContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={dashboardStyles.dataInformation}>
            <RiSecurePaymentFill size={70} color="#d9534f" />
            <div>
              Total Orders
              <h3>
                {orders.length} {orders.length > 1 ? "Orders" : "Order"}
              </h3>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {loading ? (
              <Loading />
            ) : (
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <span>#</span>
                      {order.id}
                    </td>
                    <td>{order.user.id}</td>
                    <td>{order.user.name}</td>
                    <td>${+order.total_price}</td>
                    <td>
                      <button style={{ background: "#d9534f" }} onClick={() => navigate(`${order.id}`)}>
                        View Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </>
      )}
    </div>
  );
};

export default Orders;
