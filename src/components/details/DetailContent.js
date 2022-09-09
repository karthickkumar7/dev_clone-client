import React from "react";

import Disscussion from "../comments/Disscussion";

const DetailContent = () => {
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
              <h1 className="text-xl font-semibold">Username</h1>
              <p className="text-slate-500">Posted on Sep 8</p>
            </div>
          </div>
          {/* title & tags */}
          <div className="w-full h-[180px] px-4 ">
            <h1 className="text-4xl font-bold">
              Hey man Leave Her Alone! asasas asasasas asasasassa asasasasa
              asasasasasas
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              temporibus dolores adipisci nemo magnam eum culpa obcaecati,
              soluta repellat consequuntur quos impedit sequi ipsum ex mollitia,
              accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Beatae temporibus dolores adipisci
              nemo magnam eum culpa obcaecati, soluta repellat consequuntur quos
              impedit sequi ipsum ex mollitia, accusamus incidunt quam quasi!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              temporibus dolores adipisci nemo magnam eum culpa obcaecati,
              soluta repellat consequuntur quos impedit sequi ipsum ex mollitia,
              accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Beatae temporibus dolores adipisci
              nemo magnam eum culpa obcaecati, soluta repellat consequuntur quos
              impedit sequi ipsum ex mollitia, accusamus incidunt quam quasi!
              adipisci nemo magnam eum culpa obcaecati, soluta repellat
              consequuntur quos impedit sequi ipsum ex mollitia, accusamus
              incidunt quam quasi!
            </p>
            <br />
            <br />
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              temporibus dolores adipisci nemo magnam eum culpa obcaecati,
              soluta repellat consequuntur quos impedit sequi ipsum ex mollitia,
              accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Beatae temporibus dolores adipisci
              nemo magnam eum culpa obcaecati, soluta repellat consequuntur quos
              impedit sequi ipsum ex mollitia, accusamus incidunt quam quasi!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              temporibus dolores adipisci nemo magnam eum culpa obcaecati,
              soluta repellat consequuntur quos impedit sequi ipsum ex mollitia,
              accusamus incidunt quam quasi! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Beatae temporibus dolores adipisci
              nemo magnam eum culpa obcaecati, soluta repellat consequuntur quos
              impedit sequi ipsum ex mollitia, accusamus incidunt quam quasi!
            </p>
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
