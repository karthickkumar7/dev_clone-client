import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-[50px] px-2 flex items-center">
      <Link
        to=""
        className={`${
          pathname === "/" ? "text-lg font-bold" : ""
        } mr-3 px-2 py-1 cursor-pointer rounded text-slate-700 hover:bg-white`}
      >
        Relevent
      </Link>
      <Link
        to="latest"
        className={`${
          pathname === "/latest" ? "text-lg font-bold" : ""
        } mr-3 px-2 py-1 cursor-pointer rounded text-slate-700 hover:bg-white`}
      >
        Latest
      </Link>
      <Link
        to="top"
        className={`${
          pathname === "/top" ? "text-lg font-bold" : ""
        } mr-3 px-2 py-1 cursor-pointer rounded text-slate-700 hover:bg-white`}
      >
        Top
      </Link>
    </div>
  );
};

export default SubNav;
