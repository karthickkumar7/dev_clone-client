import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHeart2Line, RiMessage3Line, RiBookmarkLine } from "react-icons/ri";

const Article = ({ _id, username, date, title, tags }) => {
  const navigate = useNavigate();

  const detailRedirectHandler = () => {
    navigate(`/${_id}`);
  };

  const profileRedirectHandler = () => {
    navigate(`/profile/${username}`);
  };

  const tagsRedirectHandler = (tag) => {
    navigate(`/tags/${tag}`);
  };

  return (
    <article className="w-full min-h-[220px] mb-2 py-3 flex flex-col rounded shadow-sm bg-white">
      <section className="w-full h-1/6 my-1 flex">
        <div className="w-[80px] h-full flex justify-center items-center">
          {/* profile img */}
          <div
            className="w-[50px] h-[50px] rounded-full cursor-pointer bg-slate-600 hover:opacity-80"
            onClick={profileRedirectHandler}
          ></div>
        </div>
        {/* profile info */}
        <div className="w-[720px] h-full flex flex-col justify-center">
          <h1
            className="font-semibold cursor-pointer hover:text-slate-500"
            onClick={profileRedirectHandler}
          >
            {username}
          </h1>
          <p className="text-slate-500">{date}</p>
        </div>
      </section>
      <section className="w-full h-4/6 my-1 flex">
        <div className="w-[80px] h-full flex justify-center items-center"></div>
        <div className="w-[720px] h-full">
          <h1
            className="mb-3 text-3xl font-semibold cursor-pointer hover:text-blue-600 hover:underline"
            onClick={detailRedirectHandler}
          >
            {title}
          </h1>
          <div className="my-4">
            {tags?.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="mr-3 px-2 py-1 hover:bg-sky-100 rounded cursor-pointer"
                onClick={() => tagsRedirectHandler(tag)}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* reactions */}
      <section className="w-full h-1/6 flex">
        <div className="w-[80px] h-full flex justify-center items-center"></div>
        <div className="w-[720px] h-full flex justify-between items-center">
          {/* left reactions */}
          <div className="flex">
            <section className="h-[40px] px-2 py-1 flex items-center cursor-pointer rounded hover:bg-slate-100">
              <RiHeart2Line className="mr-2 text-lg" />
              <span>13 reactions</span>
            </section>
            <section
              className="h-[40px] px-2 py-1 flex items-center cursor-pointer rounded hover:bg-slate-100"
              onClick={detailRedirectHandler}
            >
              <RiMessage3Line className="mr-2 text-lg" />
              <span>13 comments</span>
            </section>
          </div>
          {/* right reactions */}
          <div>
            <section className="h-[40px] mr-3 px-2 py-1 flex items-center justify-center cursor-pointer rounded hover:bg-slate-100">
              <RiBookmarkLine className="mr-2 text-lg" />
            </section>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Article;
