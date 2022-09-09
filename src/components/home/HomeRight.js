import React from "react";

const HomeRight = () => {
  return (
    <div className="w-[350px] py-2 flex flex-col items-end">
      <article className="w-[340px] min-h-[300px] mb-3 p-4 flex flex-col justify-between rounded shadow-sm bg-white">
        <h1 className="text-2xl text-blue-500 font-bold">Lorem ipsum dolor</h1>
        <h4 className="text-lg text-slate-600 font-bold">
          Lorem ipsum dolor sit amet consectetur
        </h4>
        <p className="my-2 text-sm text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
          molestias error quos in nulla nihil? Perferendis vel vitae placeat
          harum enim! Quia harum pariatur voluptate deleniti iure placeat fugit?
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
      <article className="w-[340px] h-[400px] mb-3  p-4 flex flex-col justify-between rounded shadow-sm bg-white"></article>
      <article className="w-[340px] h-[100px] mb-3 p-4 flex flex-col justify-between rounded shadow-sm bg-white"></article>
    </div>
  );
};

export default HomeRight;
