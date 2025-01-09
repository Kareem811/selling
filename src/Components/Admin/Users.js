import React, { useEffect, useState } from "react";
import dashboardStyles from "./dashboard.module.css";
import { FaUserAlt } from "react-icons/fa";
import axiosClient from "../../Utilities/axiosClient";
import Loading from "../Loading/Loading";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState({});
  useEffect(() => {
    axiosClient
      .get("/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRoleChange = (userId, role) => {
    setSelectedRole((prev) => ({
      ...prev,
      [userId]: role,
    }));
  };

  const updateRole = (userId) => {
    const updatedRole = selectedRole[userId];
    if (updatedRole) {
      axiosClient
        .post(`/users/${userId}/role`, { role: updatedRole })
        .then((res) => {
          console.log(res);
          setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, role: updatedRole } : user)));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={dashboardStyles.tableContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={dashboardStyles.dataInformation}>
            <FaUserAlt size={70} color="#d9534f" />
            <div>
              Available Users
              <h3>
                {users.length} {users.length > 1 ? "Users" : "User"}
              </h3>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>No. Orders</th>
                <th>Registered At</th>
                <th>Role</th>
                <th>Update Role</th>
              </tr>
            </thead>
            {loading ? (
              <Loading />
            ) : (
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td>{user.order.length}</td>
                    <td>{new Date(user.created_at).toLocaleDateString()}</td>
                    <td>
                      <select value={selectedRole[user.id] || user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => updateRole(user.id)}>Update Role</button>
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

export default Users;
