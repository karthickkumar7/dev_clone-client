import { useEffect } from "react";

import { getSingleThread } from "../app/slices/threadSlice";

import HeaderNav from "../components/HeaderNav";
import DetailLeftNav from "../components/details/DetailLeftNav";
import DetailRightNav from "../components/details/DetailRightNav";
import DetailContent from "../components/details/DetailContent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailThread = () => {
  const { thread } = useSelector((s) => s.thread);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleThread(id));
  }, []);

  return (
    <>
      <HeaderNav />
      <div className="w-screen min-h-[1100px] flex justify-center bg-bgclight">
        <div className="w-[1400px] h-full flex justify-center">
          {/* left */}
          <DetailLeftNav />
          {/* content */}
          <DetailContent thread={thread} />
          {/* right */}
          <DetailRightNav />
        </div>
      </div>
    </>
  );
};

export default DetailThread;
