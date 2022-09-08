import React from "react";
import { Outlet } from "react-router-dom";

import HeaderNav from "../../components/HeaderNav";

const Auth = () => {
  return (
    <div>
      <HeaderNav />
      <Outlet />
      <div className="w-screen h-[200px] bg-slate-300"></div>
    </div>
  );
};

export default Auth;
