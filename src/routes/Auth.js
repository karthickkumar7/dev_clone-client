import React from "react";
import { Outlet } from "react-router-dom";

import HeaderNav from "../components/HeaderNav";

const Auth = () => {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default Auth;
