import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home.js";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import React from "react";
import CalendarPage from "./pages/Calendar";
import FolderPage from "./pages/Folder";
import LoginPage from "./pages/login";
import SingUpPage from "./pages/signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingUpPage />} />

        <Route
          path="/post"
          element={
            <>
              <Nav />
              <Post />
            </>
          }
        />
        <Route path="/calendar" element={<Navigate to="/calendar/red" />} />
        <Route path="/folder" element={<Navigate to="/folder/red" />} />
        <Route
          path="/folder/:color"
          element={
            <>
              <Nav />
              <FolderPage />
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
