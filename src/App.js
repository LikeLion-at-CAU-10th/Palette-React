import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Post from "./pages/Post";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/calendar" element={<></>} />
        <Route path="/post" element={<Post />} />
        <Route path="/folder" element={<></>} />

        <Route path="/post-detail" element={<></>} />
        <Route path="/account" element={<></>} />
      </Routes>
    </>
  );
};

export default App;
