import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Products from "./Routes/Products";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Category from "./Components/Products/Category";
import SingleProduct from "./Components/Products/SingleProduct";
import ProtectedRoute from "./Utilities/ProtectedRoutes";
import UnAuthorized from "./Components/Unauthorized/UnAuthorized";
import { roles } from "./Utilities/Roles";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path=":cat" element={<Category />} />
        </Route>
        <Route path="/products/:cat/:pid" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {roles.map((el, idx) => (
          <Route key={idx} path={el.path} element={<ProtectedRoute role={el.role}>{el.element}</ProtectedRoute>} />
        ))}

        {/* <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route 
          path="/admin-dashboard"
          element={
            <ProtectedRoute role={"admin"}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/unauthorized" element={<UnAuthorized />} />
      </Routes>
    </div>
  );
}

export default App;
