import React from "react";

import Disscussion from "../comments/Disscussion";

const DetailContent = ({ thread }) => {
  return (
    <section className="w-[900px] h-full p-4">
      <article className="h-full w-full bg-white rounded shadow-sm overflow-hidden">
        {/* img */}
        <div className="w-full h-[400px] bg-blue-200"></div>
        <div className="w-full p-4">
          {/* profile */}
          <div className="w-full h-[100px] px-4 flex items-center">
            <div className="w-[50px] h-[50px] mr-2 bg-slate-300 rounded-full"></div>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">{thread?.user.username}</h1>
              <p className="text-slate-500">Posted on {thread?.createdAt}</p>
            </div>
          </div>
          {/* title & tags */}
          <div className="w-full min-h-[120px]  px-4 ">
            <h1 className="text-4xl font-bold">{thread?.title}</h1>
            <div className="w-full mt-2 flex">
              {thread?.tags.map((th) => (
                <div
                  key={th}
                  className="mr-3 px-2 py-1 rounded cursor-pointer text-slate-600 hover:bg-blue-200"
                >
                  <span> #{th}</span>
                </div>
              ))}
            </div>
          </div>
          {/* desc */}
          <div className="w-full  px-4">
            <p className="text-xl">{thread?.desc}</p>
          </div>
        </div>
        <hr />
        {/* comments */}
        <Disscussion />
      </article>
    </section>
  );
};

export default DetailContent;
