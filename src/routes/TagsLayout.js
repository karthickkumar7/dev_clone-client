import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const Tags = () => {
  return (
    <div className="w-screen min-h-[100px] bg-slate-100">
      <HeaderNav />
      <div className="w-full min-h-[900px] flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Tags;
