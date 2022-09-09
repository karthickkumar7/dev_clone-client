import React from "react";

const Tag = ({ color }) => {
  console.log(color);
  return (
    <article className="w-[450px] h-[330px] mr-4 mb-4 bg-white rounded cursor-pointer overflow-hidden shadow-sm hover:shadow">
      <section
        className="w-full h-[20px]"
        style={{ backgroundColor: color }}
      ></section>
      <section className="w-full h-[310px]"></section>
    </article>
  );
};

export default Tag;
