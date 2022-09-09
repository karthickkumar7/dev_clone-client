import React from "react";
import Tag from "./Tag";
import TagsNav from "./TagsNav";

const TagsList = () => {
  const genRandomColor = () => {
    const rand = () => Math.floor(Math.random() * 181);

    return `rgb(${rand()},${rand()},${rand()})`;
  };

  const loop = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 23, 5, 4];

  return (
    <div className="w-[1400px]">
      {/* tags nav */}
      <TagsNav />
      <div className="flex flex-wrap">
        {loop.map((i, j) => (
          <React.Fragment key={j}>
            <Tag color={genRandomColor()} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
