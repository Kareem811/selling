import React, { useEffect, useState } from "react";
import dashboardStyles from "./dashboard.module.css";
import AdminNavbar from "./AdminNavbar";
import { useParams } from "react-router-dom";
import axiosClient from "../../Utilities/axiosClient";
import Loading from "../Loading/Loading";

const SingleOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosClient
      .get(`/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data.order);
        setProducts(res.data.products);
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [orderId]);
  if (loading) return <Loading />;

  return (
    <>
      <AdminNavbar />
      {loading ? (
        <Loading />
      ) : (
        <section className={dashboardStyles.singleOrderContainer}>
          <div className={dashboardStyles.singleOrder}>
            <div className={dashboardStyles.userInformation}>
              <h1>Order #{order.id}</h1>
              <ul>
                <li>
                  {" "}
                  <b>Name:</b> {user.name}
                </li>
                <li>
                  <b>Email: </b>
                  {user.email}
                </li>
                <li>
                  <b>Phone: </b>
                  {user.phone}
                </li>
                <li>
                  <b>Address: </b>
                  {user.address}
                </li>
              </ul>
            </div>
          </div>
          <div className={dashboardStyles.orderDetails}>
            <div className={dashboardStyles.orderInformation}>
              <h2>Order Details </h2>
              <span>
                <b>Total Amount:</b> ${order.total_price}
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Price (Item)</th>
                  <th>Total Price</th>
                  <th>Images</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.product.id}>
                    <td>{product.quantity}</td>
                    <td>{product.product.title}</td>
                    <td>{product.product.category.name}</td>
                    <td>${product.product.price}</td>
                    <td>${order.total_price}</td>
                    <td>{product.product.images?.map((el, idx) => idx < 1 && <img src={el} key={idx} alt="" />)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleOrder;
