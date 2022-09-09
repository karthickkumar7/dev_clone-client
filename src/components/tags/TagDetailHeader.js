import React from "react";
import { IoMdPricetags } from "react-icons/io";

const TagDetailHeader = () => {
  return (
    <article className="w-full min-h-[250px] rounded overflow-hidden shadow-sm bg-white">
      <section className="w-full h-[20px] bg-teal-500"></section>
      <section className="w-full h-[280px] flex">
        {/* right */}
        <div className="h-full w-5/6 flex justify-center">
          <div className="w-5/6 h-full">
            {/* title */}
            <div className="h-1/6 my-2">
              <h1 className="text-3xl font-semibold">Phat Ass White Women</h1>
            </div>
            <div className="h-5/6">
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus modi eius, sequi reprehenderit enim tenetur? Quibusdam
                cumque voluptates id illo error voluptas, aspernatur dolorum sed
                totam! Sint itaque tenetur nihil! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Accusamus modi eius, sequi
                reprehenderit enim tenetur? Quibusdam cumque voluptates id illo
                error voluptas, aspernatur dolorum sed totam! Sint itaque
                tenetur nihil!
              </p>
            </div>
          </div>
        </div>
        {/* left */}
        <div className="w-1/6 h-full py-2 flex flex-col items-start">
          <button className="w-[150px] h-[40px] my-2 px-2 py-1 flex items-center justify-center rounded-lg font-semibold border hover:bg-slate-200">
            <IoMdPricetags className="mr-2 text-slate-700" />
            <span>Follow</span>
          </button>
          <h1 className="my-2 text-lg text-slate-600 font-semibold">
            23 Threads published
          </h1>
          <h1 className="text-slate-600 font-semibold">69 followers</h1>
        </div>
      </section>
    </article>
  );
};

export default TagDetailHeader;
