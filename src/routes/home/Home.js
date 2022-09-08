import React from "react";
import { Outlet } from "react-router-dom";

import HeaderNav from "../../components/HeaderNav";
import SubNav from "./SubNav";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Home = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-slate-100">
      <HeaderNav />
      <div className="w-[1400px] flex">
        {/* left */}
        <HomeLeft />
        {/* content */}
        <div className="w-[800px] p-2">
          {/* nav */}
          <SubNav />
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

export default Home;
