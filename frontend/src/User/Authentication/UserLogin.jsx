import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate ,NavLink} from "react-router-dom";
import Login from "./login/login";
import Profile from "./Profile";
import Edit from "./edit/editUser";
import Delete from "./logOut/logOutUser";
import CreateUser from "./register/registerUser";
import PageNot from "./ErrorHandling/PageNot";
const UserLogin = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   // navigate("/seller/home")
  //   // const islogged = localStorage.getItem("logged");
  //   // !islogged ? navigate("login") : navigate("/home");
  // }, []);
  return (
    <>

<nav className=" bg-indigo-600 m-2">
        <ul className=" flex gap sm:w-[40%] p-4 text-white text-xl lg:w-[30%]">
          <li className=" flex-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex-1">
            <NavLink to="about">About</NavLink>
          </li>
          <li className=" flex-1">
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      {/* <Routes>
        <Route path="/seller/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<Edit />} />
        <Route path="profile/delete" element={<Delete />} />
        <Route path="*" element={<PageNot/>}/>
      </Routes> */}
      <Outlet/>
    </>
  );
};

export default UserLogin;
