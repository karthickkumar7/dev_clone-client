import React from "react";

const CommentInput = () => {
  return (
    <div className="w-full flex">
      <div className="w-[150px] py-2 flex justify-center">
        {/* dp */}
        <div className="h-[50px] w-[50px] rounded-full bg-slate-400"></div>
      </div>
      <textarea
        type="text"
        placeholder="Add to the disscussion"
        className="w-[1250px] h-[100px] my-2 p-2 rounded  border outline-none placeholder:text-lg"
      />
    </div>
  );
};

export default CommentInput;
