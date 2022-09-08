import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Relevant from "./routes/home/Relevant";
import Latest from "./routes/home/Latest";
import Top from "./routes/home/Top";
import Auth from "./routes/auth/Auth";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";

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
    </Routes>
  );
};

export default App;
