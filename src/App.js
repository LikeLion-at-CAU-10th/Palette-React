import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./pages/Main.js";
import NavFolder from "./component/NavFolder";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/calendar"
          element={
            <>
              <Nav />
            </>
          }
        />
        <Route
          path="/post"
          element={
            <>
              <Nav />
              <Post />
            </>
          }
        />
        <Route path="/folder" element={<Navigate to="/folder/purple" />} />
        <Route
          path="/folder/:category"
          element={
            <>
              <Nav />
              <div>안녕</div>
            </>
          }
        />
        <Route
          path="/post-detail/:category"
          element={
            <>
              <Nav />
              <PostDetail />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <Nav />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;