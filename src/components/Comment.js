import React from "react";
import { RiHeart2Line } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";

const Comment = () => {
  return (
    <div className="w-full my-2 flex flex-col">
      <div className="flex">
        <div className="w-[150px] py-2 flex justify-center">
          {/* dp */}
          <div className="h-[50px] w-[50px] rounded-full bg-slate-400"></div>
        </div>
        {/* text */}
        <div className="w-[1250px] min-h-[110px] my-2 p-2 flex flex-col  rounded  border placeholder:text-lg">
          <div className="w-full h-[40px] flex items-center">
            <h1 className="mr-4 font-semibold">Username </h1>
            <span className="text-slate-500">Sep 8</span>
          </div>
          <div className="w-full min-h-[70px] text-slate-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              optio eaque praesentium, obcaecati quibusdam voluptates alias nemo
              excepturi consequatur harum, officia accusamus! In, aspernatur. Ab
              nobis nam dolorem repellendus
            </p>
          </div>
        </div>
      </div>
      {/* likes and commects */}
      <div className="flex">
        <div className="w-[150px] h-fullpx-4 flex items-center"></div>
        <div className="w-[1300px] h-full flex ">
          <div className="mr-4 flex items-center cursor-pointer">
            <RiHeart2Line className="text-lg mr-2" />
            <span>2 likes</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <FiMessageSquare className="text-lg mr-2" />
            <span>2 replies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
