import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
const MyRouter = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Todos></Todos>} />

      <Route path="/todos/:id" element={<Todos></Todos>} />
    </Routes>
  );
};

export default MyRouter;
