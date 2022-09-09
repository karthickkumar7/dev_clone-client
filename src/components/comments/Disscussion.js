import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

const Disscussion = () => {
  return (
    <div>
      {/* input */}
      <section className="w-full px-4">
        <h1 className="my-4 text-3xl font-semibold">Disscussion {"(  3 )"}</h1>
        <CommentInput />
        {/* comment */}
        <Comment />
        <Comment />
        <Comment />
      </section>
    </div>
  );
};

export default Disscussion;
