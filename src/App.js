import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./pages/Main.js";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import React from "react";
import CalendarPage from "./pages/Calendar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route
          path="/post"
          element={
            <>
              <Nav />
              <Post />
            </>
          }
        />
        <Route path="/calendar" element={<Navigate to="/calendar/purple" />} />
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
        <Route
          path="/calendar/:color"
          element={
            <>
              <Nav />
              <CalendarPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
