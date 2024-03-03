import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Homepage/Home";
import ToDoList from "./views/ToDoList/ToDoList";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ToDoList />} />
      </Routes>
    </AppLayout>
  );
};
export default App;
