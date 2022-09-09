import React from "react";
import { useNavigate } from "react-router-dom";

const NotLogHeaderRight = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="w-[80px] h-[40px] mr-2 px-2 py-1 rounded font-semibold hover:bg-slate-200 hover:underline"
        onClick={() => navigate("/auth")}
      >
        Login
      </button>
      <button
        className="w-[130px] h-[40px] px-2 py-1 rounded font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-slate-100 hover:underline"
        onClick={() => navigate("/auth/register")}
      >
        Create Account
      </button>
    </div>
  );
};

export default NotLogHeaderRight;
