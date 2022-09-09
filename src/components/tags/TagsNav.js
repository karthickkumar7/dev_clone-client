import React from "react";
import { FiSearch } from "react-icons/fi";

const TagsNav = () => {
  return (
    <nav className="w-full h-[80px] flex justify-between items-center ">
      <section className="">
        <h1 className="text-3xl font-bold">Top tags</h1>
      </section>
      <section className="flex ">
        <div className="h-[40px] mr-2 flex items-center rounded border border-slate-300 bg-white overflow-hidden">
          <input
            type="text"
            placeholder="Search for tags"
            className="px-2 py-1 outline-none"
          />
          <div className="w-[30px] h-full flex items-center justify-center cursor-pointer hover:bg-slate-200">
            <FiSearch className="text-xl" />
          </div>
        </div>
        <button className="px-2 py-1 text-slate-700 font-semibold rounded hover:bg-slate-200">
          Following tags
        </button>
      </section>
    </nav>
  );
};

export default TagsNav;
