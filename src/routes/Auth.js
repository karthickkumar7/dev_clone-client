import React from "react";
import { Outlet } from "react-router-dom";

import HeaderNav from "../components/HeaderNav";

const Auth = () => {
  return (
    <div className="w-screen h-screen bg-bgclight">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default Auth;
