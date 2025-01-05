// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import AuthContext from "../Utilities/Context";

// const ProtectedRoute = ({ children, role }) => {
//   const { user } = useContext(AuthContext);
//   if (!user) {
//     return <Navigate to="/" />;
//   }
//   if (role && user.role !== role) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./Context";
import Loading from "../Components/Loading/Loading";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
