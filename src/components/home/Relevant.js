import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllThreads } from "../../app/slices/threadSlice";

import Article from "../../components/Article";
import ImgArticle from "../../components/ImgArticle";

const Relevant = () => {
  const { threads } = useSelector((s) => s.thread);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThreads());
  }, []);

  return (
    <>
      <ImgArticle />
      {threads.map((thread) => (
        <React.Fragment key={thread._id}>
          <Article
            title={thread.title}
            username={thread.user.username}
            date={thread.createdAt}
            tags={thread.tags}
            _id={thread._id}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Relevant;
