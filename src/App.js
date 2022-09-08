import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Relevant from "./routes/home/Relevant";
import Latest from "./routes/home/Latest";
import Top from "./routes/home/Top";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Relevant />} />
        <Route path="latest" element={<Latest />} />
        <Route path="top" element={<Top />} />
      </Route>
    </Routes>
  );
};

export default App;
