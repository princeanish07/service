// import './App.css'
import { Routes, Route } from "react-router-dom";
import UserLogin from "./User/Authentication/UserLogin";
import Landing from "./User/landing";

import Login from "./User/Authentication/login/login";
import LoginForm from "./User/Authentication/login/loginForm";
import CreateUser from "./User/Authentication/register/registerUser";
import Home from "./User/buyer/Home";
import { useEffect } from "react";
import Naavbar from "./User/Naavbar";
import SellerHome from "./User/seller/Home";
import Basic from "./User/seller/basic";
import CategoryDemo from "./User/seller/profile/categoryDemo";
import Category from "./User/seller/category";
import Service from "./User/seller/service";
import ServiceCreation from "./User/seller/profile/serviceCreation";
import Scope from "./User/seller/profile/scope";
import Qualification from "./User/seller/qualification";
import Portfolio from "./User/seller/portfolio";
import { useNavigate } from "react-router-dom";
import CategoryId from "./User/seller/categoryId";
import ServiceId from "./User/seller/serviceId";
import Dashboard from "./User/seller/dashboard";
import Profile from "./User/seller/profile";
import ServiceSetup from "./User/seller/services/serviceSetup";
function App() {
  const navigate = useNavigate();

  // !islogged ? navigate("login") : navigate("/home");
  return (
    <>
      <Routes>
        <Route path="/seller/*" element={<SellerHome />}>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="category" element={<Category />}>
            <Route path=":id" element={<CategoryId />} />
          </Route>
          <Route path="category/service/:id" element={<ServiceSetup/>}></Route>
          <Route path="qualification" element={<Qualification />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        <Route path="/" element={<Landing />}></Route>
        <Route
          path="seller/login"
          element={<Login role="seller" roleId="2" />}
        ></Route>
        <Route path="seller/create" element={<CreateUser role="2" />}></Route>

        <Route path="buyer/create" element={<CreateUser role="1" />}></Route>
        <Route path="buyer" element={<Home />}></Route>
        <Route
          path="buyer/login"
          element={<Login role="buyer" roleId="1" />}
        ></Route>

        <Route path="profile/category" element={<Category />}></Route>

        <Route path="profile/service/create" element={<ServiceCreation />} />
        <Route path="profile/service/scope" element={<Scope />} />
        <Route path="profile/qualification" element={<Qualification />} />
        <Route path="seller/dashboard" element={<Dashboard />}></Route>

        <Route path="seller" element={<SellerHome />} />
      </Routes>
    </>
  );
}

export default App;
