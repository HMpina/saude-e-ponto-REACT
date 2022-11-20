import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="*" element={<>No Match</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
