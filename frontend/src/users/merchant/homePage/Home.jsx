import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../homePage/Navbar";
export default function Home() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Outlet />
    </div>
  );
}
