import React from "react";

import HeaderNav from "../components/HeaderNav";
import DetailLeftNav from "../components/details/DetailLeftNav";
import DetailRightNav from "../components/details/DetailRightNav";
import DetailContent from "../components/details/DetailContent";

const DetailThread = () => {
  return (
    <>
      <HeaderNav />
      <div className="w-screen min-h-[1100px] flex justify-center bg-slate-100">
        <div className="w-[1400px] h-full flex justify-center">
          {/* left */}
          <DetailLeftNav />
          {/* content */}
          <DetailContent />
          {/* right */}
          <DetailRightNav />
        </div>
      </div>
    </>
  );
};

export default DetailThread;
