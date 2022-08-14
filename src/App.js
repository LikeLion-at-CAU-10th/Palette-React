import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";

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
      </Routes>
    </>
  );
};

export default App;
