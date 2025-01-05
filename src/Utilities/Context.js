// import React, { createContext, useState, useEffect } from "react";
// import axiosClient from "./axiosClient";
// import { useNavigate } from "react-router-dom";
// const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = sessionStorage.getItem("user");
//     if (token) {
//       axiosClient
//         .get("/user", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUser(response.data)
//           console.log(user)
//         })
//         .catch((error) => {
//           console.error("Error fetching user:", error);
//           sessionStorage.removeItem("user");
//         });
//     }
//   }, []);

//   const login = async (userCredentials) => {
//     try {
//       const response = await axiosClient.post("/login", userCredentials);
//       const userData = response.data;
//       sessionStorage.setItem("user", userData.token);
//       setUser(userData.user);
//     } catch (error) {
//       console.error(error.response ? error.response.data : error.message);
//       throw new Error("Invalid login credentials");
//     }
//   };

//   const logout = async () => {
//     try {
//       await axiosClient.post("/logout");
//       sessionStorage.removeItem("user");
//       setUser(null);
//       navigate("/");
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
// };

// export default AuthContext;

import React, { createContext, useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("user");
    if (token) {
      axiosClient
        .get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          sessionStorage.removeItem("user");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (userCredentials) => {
    try {
      const response = await axiosClient.post("/login", userCredentials);
      const userData = response.data;
      sessionStorage.setItem("user", userData.token);
      if (userData.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
      setUser(userData.user);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      throw new Error("Invalid login credentials");
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/logout");
      sessionStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
