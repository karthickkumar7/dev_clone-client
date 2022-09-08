import React from "react";
import { RiHeart2Line, RiBookmarkLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";

import HeaderNav from "../components/HeaderNav";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

const DetailThread = () => {
  return (
    <>
      <HeaderNav />
      <div className="w-screen min-h-[1100px] flex justify-center bg-slate-100">
        <div className="w-[1400px] h-full flex justify-center">
          {/* left */}
          <section className="w-[100px] h-full flex">
            <div className="w-full h-[500px] flex flex-col items-center justify-center">
              <div className="my-3 flex flex-col items-center cursor-pointer">
                <RiHeart2Line className="text-3xl" />
                <span className="text-xl">6</span>
              </div>
              <div className="my-3 flex flex-col items-center cursor-pointer">
                <RiBookmarkLine className="text-2xl" />
                <span className="text-xl">6</span>
              </div>
              <div className="my-3 flex flex-col items-center cursor-pointer">
                <BiDotsVerticalRounded className="text-3xl" />
              </div>
            </div>
          </section>

          {/* content */}
          <section className="w-[900px] h-full p-4">
            <article className="h-full w-full bg-white rounded shadow-sm overflow-hidden">
              {/* img */}
              <div className="w-full h-[400px] bg-blue-200"></div>
              <div className="w-full p-4">
                {/* profile */}
                <div className="w-full h-[100px] px-4 flex items-center">
                  <div className="w-[50px] h-[50px] mr-2 bg-slate-300 rounded-full"></div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">Username</h1>
                    <p className="text-slate-500">Posted on Sep 8</p>
                  </div>
                </div>
                {/* title & tags */}
                <div className="w-full h-[180px] px-4 ">
                  <h1 className="text-4xl font-bold">
                    Hey man Leave Her Alone! asasas asasasas asasasassa
                    asasasasa asasasasasas
                  </h1>
                  <div className="w-full mt-2 flex">
                    <div className="mr-3 px-2 py-1 rounded cursor-pointer text-slate-600 hover:bg-blue-200">
                      <span> #sex</span>
                    </div>
                    <div className="mr-3 px-2 py-1 rounded cursor-pointer text-slate-600 hover:bg-blue-200">
                      <span> #simp</span>
                    </div>
                    <div className="mr-3 px-2 py-1 rounded cursor-pointer text-slate-600 hover:bg-blue-200">
                      <span> #hoe</span>
                    </div>
                    <div className="mr-3 px-2 py-1 rounded cursor-pointer text-slate-600 hover:bg-blue-200">
                      <span> #poon</span>
                    </div>
                  </div>
                </div>
                {/* desc */}
                <div className="w-full h-[800px] px-4">
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae temporibus dolores adipisci nemo magnam eum culpa
                    obcaecati, soluta repellat consequuntur quos impedit sequi
                    ipsum ex mollitia, accusamus incidunt quam quasi! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                    temporibus dolores adipisci nemo magnam eum culpa obcaecati,
                    soluta repellat consequuntur quos impedit sequi ipsum ex
                    mollitia, accusamus incidunt quam quasi! Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Beatae temporibus
                    dolores adipisci nemo magnam eum culpa obcaecati, soluta
                    repellat consequuntur quos impedit sequi ipsum ex mollitia,
                    accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Beatae temporibus dolores
                    adipisci nemo magnam eum culpa obcaecati, soluta repellat
                    consequuntur quos impedit sequi ipsum ex mollitia, accusamus
                    incidunt quam quasi! adipisci nemo magnam eum culpa
                    obcaecati, soluta repellat consequuntur quos impedit sequi
                    ipsum ex mollitia, accusamus incidunt quam quasi!
                  </p>
                  <br />
                  <br />
                  <br />
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae temporibus dolores adipisci nemo magnam eum culpa
                    obcaecati, soluta repellat consequuntur quos impedit sequi
                    ipsum ex mollitia, accusamus incidunt quam quasi! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                    temporibus dolores adipisci nemo magnam eum culpa obcaecati,
                    soluta repellat consequuntur quos impedit sequi ipsum ex
                    mollitia, accusamus incidunt quam quasi! Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Beatae temporibus
                    dolores adipisci nemo magnam eum culpa obcaecati, soluta
                    repellat consequuntur quos impedit sequi ipsum ex mollitia,
                    accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Beatae temporibus dolores
                    adipisci nemo magnam eum culpa obcaecati, soluta repellat
                    consequuntur quos impedit sequi ipsum ex mollitia, accusamus
                    incidunt quam quasi!
                  </p>
                </div>
              </div>
              <hr />
              {/* comments */}
              <div>
                {/* input */}
                <section className="w-full px-4">
                  <h1 className="my-4 text-3xl font-semibold">
                    Disscussion {"(  3 )"}
                  </h1>
                  <CommentInput />
                  {/* comment */}
                  <Comment />
                  <Comment />
                  <Comment />
                </section>
              </div>
            </article>
          </section>
          {/* right */}
          <section className="w-[400px] h-full bg-green-200"></section>
        </div>
      </div>
    </>
  );
};

export default DetailThread;
