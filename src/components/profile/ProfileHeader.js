import React from "react";
import { format } from "date-fns";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsPeople, BsFillPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const { username, email, createdAt } = JSON.parse(
    localStorage.getItem("dev-user")
  );
  const { userThreads } = useSelector((s) => s.thread);

  return (
    <div className="w-[1400px] h-[350px]">
      <div className="w-[1000px] h-[400px] absolute -top-[60px] right-[700px] rounded-lg bg-white">
        {/* profile dp */}
        <div className="w-[120px] h-[120px] rounded-full bg-blue-400 border-4 border-black absolute -top-[60px] right-[440px]"></div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center border-b">
            <h1 className="text-3xl font-semibold">{username}</h1>
            <p className="my-2 text-slate-500">Joined {createdAt}</p>
            <p className="my-2 text-slate-500"> {email}</p>
          </div>
          <div className="my-2 flex flex-col items-center">
            <div className="w-[200px] flex items-center justify-between">
              <MdOutlinePostAdd className="mr-2 text-xl" />
              <h1 className="w-[170px]">
                {userThreads.length} threads published
              </h1>
            </div>
            <div className="w-[200px] flex items-center justify-between">
              <FaRegCommentAlt className="mr-2 text-md" />
              <h1 className="w-[170px]">0 comments written</h1>
            </div>
            <div className="flex items-center">
              <BiPurchaseTagAlt className="mr-2 text-xl" />
              <h1 className="w-[170px]">0 tags following</h1>
            </div>
            <div className="flex items-center">
              <BsFillPeopleFill className="mr-2 text-xl" />
              <h1 className="w-[170px]">0 people following</h1>
            </div>
            <div className="flex items-center">
              <BsPeople className="mr-2 text-xl" />
              <h1 className="w-[170px] ">0 people follow you</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
