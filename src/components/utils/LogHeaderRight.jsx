import React from "react";
// import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { logout } from "../../app/slices/authSlice";

const LogHeaderRight = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center">
      {/* logout */}
      <button
        className="w-[130px] h-[40px] mx-2 px-2 py-1 rounded font-semibold border border-red-600 text-red-600 hover:bg-red-600 hover:text-slate-100 hover:underline"
        onClick={logoutHandler}
      >
        Logout
      </button>
      {/* niti */}
      <AiOutlineBell className="mx-2 text-3xl cursor-pointer" />
      {/* profile */}
      <CgProfile className="mx-2 text-3xl cursor-pointer" />
    </div>
  );
};

export default LogHeaderRight;
