import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { verify } from "./app/slices/authSlice";

import Home from "./routes/Home";
import Relevant from "./components/home/Relevant";
import Latest from "./components/home/Latest";
import Top from "./components/home/Top";
import Auth from "./routes/Auth";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DetailThread from "./routes/DetailThread";
import ThreadCreator from "./routes/ThreadCreator";
import TagsLayout from "./routes/TagsLayout";
import TagsList from "./components/tags/TagsList";
import Tagdetail from "./components/tags/Tagdetail";
import About from "./routes/About";
import Popular from "./routes/Popular";
import PopularList from "./components/popular/PopularList";
import Profile from "./routes/Profile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("dev-token")) {
      dispatch(verify());
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Relevant />} />
        <Route path="latest" element={<Latest />} />
        <Route path="top" element={<Top />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/:id" element={<DetailThread />} />
      <Route path="/tags" element={<TagsLayout />}>
        <Route index element={<TagsList />} />
        <Route path=":tag" element={<Tagdetail />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/popular" element={<Popular />}>
        <Route index element={<PopularList />} />
      </Route>
      <Route path="/create" element={<ThreadCreator />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
