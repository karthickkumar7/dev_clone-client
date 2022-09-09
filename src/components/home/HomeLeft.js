import React from "react";
import { useSelector } from "react-redux";

import HomeLoginNote from "./HomeLoginNote";
import SideNav from "./SideNav";
import TagsNav from "./TagsNav";

const HomeLeft = () => {
  const { isLoggedIn } = useSelector((s) => s.auth);

  return (
    <div className="w-[250px] py-2">
      {!isLoggedIn && <HomeLoginNote />}
      <SideNav />
      <TagsNav />
    </div>
  );
};

export default HomeLeft;
