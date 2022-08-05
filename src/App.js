import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import { PostDetailBody } from "./styles/PDstyled";
import CalendarPage from "./pages/Calendar";

const App = () => {
  return (
    <>
      <div> </div>
      <Routes>
        <Route
          path="/post-detail"
          element={
            <PostDetailBody>
              <PostDetail></PostDetail>
            </PostDetailBody>
          }
        ></Route>
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </>
  );
};

export default App;
