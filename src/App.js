import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NormalizeStyles } from "./shared/NormalizeStyles";

import Home from "./screens/Home";
import { Login } from "./screens/Login";
import React from "react";

function App() {
  return (
    <>

      <NormalizeStyles />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="*" element={<>No Match</>} />
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
