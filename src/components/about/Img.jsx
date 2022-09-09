import React from "react";

const Img = ({ img }) => {
  return (
    <div className="w-full h-[300px]">
      <img src={img} alt="" className="w-full h-full my-1" />
    </div>
  );
};

export default Img;
