import React, { useState } from "react";
import { ButtonNav } from "./buttons";
import { useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  location = location.pathname.slice(1);
  const navItems = [
    {
      id: "",
      title: "Home",
      destinationPath: "/",
    },
    {
      id: "trend",
      title: "Trend",
      destinationPath: "/trend",
    },
    {
      id: "tv",
      title: "TV Shows",
      destinationPath: "/tv",
    },
  ];
  const renderNavItems = navItems.map((navItem) => (
    <li key={navItem.id}>
      <ButtonNav {...navItem} isActive={location === navItem.id} />
    </li>
  ));

  return (
    <div className="flex justify-between py-5 px-2 bg-slate-700">
      <p className="text-white">
        <ButtonNav title={"Golden Movies"} id={"home"} destinationPath={"/"} />
      </p>
      <ul className="flex space-x-4">{renderNavItems}</ul>
      <input
        type="text"
        name="search"
        id="search"
        className="border border-slate-700 rounded-full"
      />
    </div>
  );
}

export default Navbar;
