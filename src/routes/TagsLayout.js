import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const Tags = () => {
  return (
    <div className="w-screen bg-bgclight">
      <HeaderNav />
      <div className="w-full  flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Tags;
