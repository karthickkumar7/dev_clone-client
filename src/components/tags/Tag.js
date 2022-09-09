import React from "react";

const Tag = ({ color }) => {
  console.log(color);
  return (
    <article className="w-[450px] h-[330px] mr-4 mb-4 bg-white rounded cursor-pointer overflow-hidden shadow-sm hover:shadow">
      <section
        className="w-full h-[20px]"
        style={{ backgroundColor: color }}
      ></section>
      <section className="w-full h-[310px] p-4">
        <div className="w-full h-1/6">
          <h1 className="text-2xl font-bold">#Interracial</h1>
        </div>
        <div className="w-full h-4/6">
          <p className="mb-2 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur optio dolorum repellat quasi vel repellendus autem
            voluptas eius. Sit, corporis quas fuga repellendus quis commodi
            voluptas. Labore ut aliquid minima!
          </p>
          <span className="text-slate-600 font-semibold">
            123 threads published
          </span>
        </div>
        <div className="w-full h-1/6">
          <button className="w-[100px] px-2 py-1 rounded-lg font-semibold border hover:bg-slate-200">
            Follow{" "}
          </button>
        </div>
      </section>
    </article>
  );
};

export default Tag;
