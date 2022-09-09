import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Relevant from "./components/home/Relevant";
import Latest from "./components/home/Latest";
import Top from "./components/home/Top";
import Auth from "./routes/Auth";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DetailThread from "./routes/DetailThread";
import ThreadCreator from "./components/ThreadCreator";
import TagsLayout from "./routes/TagsLayout";
import TagsList from "./components/tags/TagsList";

const App = () => {
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
      <Route path="/create" element={<ThreadCreator />} />
      <Route path="/tags" element={<TagsLayout />}>
        <Route index element={<TagsList />} />
        <Route path=":tag" element={<h1>Tag</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
