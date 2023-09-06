import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Profile from "./profile/profile";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Outlet />
    </div>
  );
}
