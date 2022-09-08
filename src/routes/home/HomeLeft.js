import React from "react";

import SideNav from "./SideNav";
import TagsNav from "./TagsNav";

const HomeLeft = () => {
  return (
    <div className="w-[250px] py-2">
      <article className="w-[240px] h-[300px] mb-3 p-4 flex flex-col justify-between rounded shadow-sm bg-slate-50">
        <h1 className="text-2xl text-blue-500 font-bold">Title Title</h1>
        <h4 className="text-lg text-slate-600 font-bold">
          Sub Title Title Title
        </h4>
        <p className="text-sm text-slate-500">
          hey man leave her alone! hey man leave her alone! hey man leave her
          alone! hey man leave her alone!
        </p>
        <div className="w-full h-[100px] flex flex-col justify-between items-center">
          <button className="w-full h-[40px] px-2 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-slate-100 hover:underline">
            Create Account
          </button>
          <button className="w-full h-[40px] mb-2 px-2 py-1 rounded hover:bg-slate-200 hover:underline">
            Login
          </button>
        </div>
      </article>
      <SideNav />
      <TagsNav />
    </div>
  );
};

export default HomeLeft;
