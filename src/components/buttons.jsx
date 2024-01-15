import React from "react";
import { Link, useLocation } from "react-router-dom";

const ButtonNav = ({ title, destinationPath, id, isActive = false }) => {
  return (
    <Link
      to={destinationPath}
      id={id}
      className={`text-white p-2 ${isActive && "bg-slate-500 rounded-full"}`}
    >
      {title}
    </Link>
  );
};

export { ButtonNav };
