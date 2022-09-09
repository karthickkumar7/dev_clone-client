import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdFiberNew } from "react-icons/md";
import { SiHotjar } from "react-icons/si";
import { GrStatusInfoSmall } from "react-icons/gr";
import { AiTwotoneTags } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="w-[240px] h-[250px] mt-4 flex ">
      <div className="w-full flex flex-col items-start">
        <div className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200">
          <HiHome className="text-xl mr-2" />
          <Link to="/" className="text-lg">
            Home
          </Link>
        </div>
        <div className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200">
          <AiTwotoneTags className="text-xl text-yellow-500 mr-2" />
          <Link to="/tags" className="text-lg">
            Tags
          </Link>
        </div>
        <div className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200">
          <GrStatusInfoSmall className="text-xl mr-2" />
          <Link to="/about" className="text-lg">
            About
          </Link>
        </div>
        <div className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200">
          <SiHotjar className="text-xl text-red-500 mr-2" />
          <Link to="/popular" className="text-lg">
            Popular
          </Link>
        </div>
        <div className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200">
          <MdFiberNew className="text-xl text-green-500 mr-2" />
          <h1 className="text-lg">New</h1>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
