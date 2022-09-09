import React from "react";
import { useNavigate } from "react-router-dom";

const tags = [
  {
    _id: 1,
    tag: "interracial",
  },
  {
    _id: 2,
    tag: "gangbang",
  },
  {
    _id: 3,
    tag: "threesome",
  },
  {
    _id: 4,
    tag: "hardcore",
  },
  {
    _id: 5,
    tag: "reverse gangbang",
  },
  {
    _id: 6,
    tag: "blowjob",
  },
  {
    _id: 7,
    tag: "anal",
  },
  {
    _id: 8,
    tag: "asian",
  },
  {
    _id: 9,
    tag: "pawg",
  },
  {
    _id: 10,
    tag: "teen",
  },
  {
    _id: 11,
    tag: "milf",
  },
];

const TagsNav = () => {
  const navigate = useNavigate();

  const tagRedirectHandler = (tag) => navigate(`/tags/${tag}`);

  return (
    <div className="w-[240px] h-[500px] mb-3 flex flex-col rounded shadow-sm">
      <h1 className="mb-3 text-xl font-semibold">Popular tags</h1>
      <div className="w-full p-2 flex flex-col items-start text-lg overflow-y-scroll">
        {tags.map(({ _id, tag }) => (
          <div
            key={_id}
            className="w-full py-2 flex items-center rounded cursor-pointer hover:underline hover:bg-blue-200"
            onClick={() => tagRedirectHandler(tag)}
          >
            <h1 className="text-lg">#{tag}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsNav;
