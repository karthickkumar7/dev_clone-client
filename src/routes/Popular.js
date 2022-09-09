import React from "react";

import HeaderNav from "../components/HeaderNav";
import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";

import { Outlet } from "react-router-dom";

const Popular = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-slate-100">
      <HeaderNav />
      <div className="w-[1400px] flex">
        {/* left */}
        <HomeLeft />
        {/* content */}
        <div className="w-[800px] p-2">
          {/* main */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
        {/* right */}
        <HomeRight />
      </div>
    </div>
  );
};

export default Popular;
