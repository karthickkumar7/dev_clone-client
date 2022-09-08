import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default Layout;
