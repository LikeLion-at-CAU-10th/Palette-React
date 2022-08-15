import FolderPage from "./pages/Folder";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </>
  );
};

export default App;
