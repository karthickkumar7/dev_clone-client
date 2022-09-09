import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserThreads } from "../../app/slices/threadSlice";

import Article from "../Article";

const UserThreadsList = () => {
  const { userThreads } = useSelector((s) => s.thread);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThreads());
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <div className="">
        {userThreads?.map(({ _id, title, createdAt, user }) => (
          <React.Fragment key={_id}>
            <Article title={title} date={createdAt} username={user.username} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UserThreadsList;
