import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./pages/Main.js";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/calendar" element={<></>} />
        <Route path="/post" element={<></>} />
        <Route path="/folder" element={<></>} />

        <Route path="/post-detail" element={<></>} />
        <Route path="/account" element={<></>} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;


