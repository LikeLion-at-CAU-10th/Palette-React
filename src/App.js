import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/calendar" element={<></>} />
        <Route path="/post" element={<Post />} />
        <Route path="/folder" element={<></>} />

        <Route path="/post-detail/:category" element={<PostDetail/>} />
        <Route path="/account" element={<></>} />
      </Routes>
    </>
  );
};

export default App;
