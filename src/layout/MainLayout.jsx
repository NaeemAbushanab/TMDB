import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-lvh container">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
