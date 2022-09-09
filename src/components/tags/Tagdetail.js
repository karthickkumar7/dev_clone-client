import React from "react";
import Article from "../Article";
import SubNav from "../home/SubNav";
import TagDetailHeader from "./TagDetailHeader";

const DetailTag = () => {
  return (
    <div className="w-screen h-full flex justify-center">
      <div className="w-[1400px] h-full py-4">
        {/* header */}
        <TagDetailHeader />
        {/* main */}
        <main className="w-full h-[900px] py-4 flex">
          {/* left */}
          <section className="h-full w-[300px] px-2 flex flex-col items-start">
            <div className="w-full h-[100px] mb-2 flex items-center">
              <button className="px-2 py-1 text-white rounded font-semibold bg-blue-700">
                Create Thread
              </button>
            </div>
            <div className="mb-2 py-2  border-b">
              <h1 className="text-lg font-semibold">submission guidelines</h1>
              <p className="my-2 font-thin">
                Client-side, server-side, it doesn't matter. This tag should be
                used for anything JavaScript focused. If the topic is about a
                JavaScript framework or library, just remember to include the
                framework's tag as well.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold">about #javascript</h1>
              <p className="my-2 font-thin">
                How should the tag be written? All lower-case letters for the
                tag: javascript.
              </p>
            </div>
          </section>
          <section className="h-full w-[800px] p-2">
            <SubNav />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </section>
          {/* right */}
          <section className="h-full w-[300px]"></section>
        </main>
      </div>
    </div>
  );
};

export default DetailTag;
