import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/Calendar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/calendar/:color" element={<CalendarPage />} />
      </Routes>
    </>
  );
};

export default App;
