import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;


