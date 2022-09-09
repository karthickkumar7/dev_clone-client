import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setError, resetState } from "../app/slices/threadSlice";

import HeaderNav from "../components/HeaderNav";

const ThreadCreator = () => {
  const [title, setTitle] = useState("");
  const [tagsStr, setTagsStr] = useState("");
  const [cover, setCover] = useState("");
  const [desc, setDesc] = useState("");

  const { isError, error } = useSelector((s) => s.thread);
  const dispatch = useDispatch();

  const publishHandler = () => {
    let msg;
    if (!desc || !title || !tagsStr) {
      if (!desc) msg = "Description is required!";
      else if (!title) msg = "Title is required!";
      else if (!tagsStr) msg = "atleast One tag is required!";

      dispatch(setError(msg));
      return;
    }
    const tags = tagsStr.trim().split(",");
    console.log({ title, desc, cover, tags });
    dispatch(resetState());
    setCover("");
    setDesc("");
    setTitle("");
    setTagsStr("");
  };

  return (
    <div className="w-screen h-screen">
      <HeaderNav />
      <div className="w-full h-[1105px] flex justify-center bg-bgclight">
        <div className="w-[1400px] h-full p-2 flex justify-center">
          <section className="w-5/6 h-[750px] p-2 rounded shadow-sm bg-white">
            {isError && (
              <h1 className="px-2 text-lg font-semibold text-red-600">
                {error}
              </h1>
            )}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Thread Title Name..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-[50px] my-3 px-2 text-2xl  font-semibold outline-none placeholder:text-3xl"
              />
              <input
                type="text"
                placeholder="Seperate tags with commas..."
                value={tagsStr}
                onChange={(e) => setTagsStr(e.target.value)}
                className="h-[50px] my-3 px-2 text-lg border  font-semibold outline-none placeholder:text-xl"
              />
              <input
                type="text"
                placeholder="Cover image uri"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                className="h-[50px] my-3 px-2 border text-slate-500  outline-none "
              />
            </div>
            <div>
              <textarea
                placeholder="write your post content here..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full h-[400px] p-2 border  outline-none placeholder:text-xl"
              ></textarea>
            </div>
            <div>
              <button
                className="w-[100px] h-[50px] my-2 mr-2 px-2 py-1 rounded text-white bg-blue-600 font-semibold shadow-sm"
                onClick={publishHandler}
              >
                Publish
              </button>
              <button className="w-[100px] h-[50px] my-2 px-2 py-1 rounded text-white bg-red-600 font-semibold shadow-sm">
                Clear
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThreadCreator;
