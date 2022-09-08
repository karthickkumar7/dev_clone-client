import { useNavigate } from "react-router-dom";
import { AiOutlineAlert } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-screen h-[60px] flex justify-center items-center border-b bg-white">
      <div className="w-[1400px] h-full flex justify-between items-center">
        {/* left */}
        <div className="flex">
          {/* logo */}
          <div
            className="h-[40px] px-2 py-1 flex justify-center items-center bg-black text-slate-200 font-bold rounded cursor-pointer hover:opacity-80"
            onClick={() => navigate("/")}
          >
            <AiOutlineAlert className="mr-1 text-xl" />
            <span>DEV</span>
          </div>
          {/* search */}
          <div className="w-[400px] h-[40px] mx-4 flex items-center justify-center rounded border duration-100 hover:border-slate-300">
            <input
              type="text"
              placeholder="Search"
              className="w-[360px] px-2 outline-none group"
            />
            <div className="w-[40px] h-full flex justify-center items-center cursor-pointer hover:bg-slate-200">
              <FiSearch className="text-xl text-slate-600" />
            </div>
          </div>
        </div>
        {/* right */}
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
      </div>
    </nav>
  );
};

export default HeaderNav;
