import React from "react";
import { RiHeart2Line, RiBookmarkLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";

const DetailLeftNav = () => {
  return (
    <section className="w-[100px] h-full flex">
      <div className="w-full h-[500px] flex flex-col items-center justify-center">
        <div className="my-3 flex flex-col items-center cursor-pointer">
          <RiHeart2Line className="text-3xl" />
          <span className="text-xl">6</span>
        </div>
        <div className="my-3 flex flex-col items-center cursor-pointer">
          <RiBookmarkLine className="text-2xl" />
          <span className="text-xl">6</span>
        </div>
        <div className="my-3 flex flex-col items-center cursor-pointer">
          <BiDotsVerticalRounded className="text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default DetailLeftNav;
