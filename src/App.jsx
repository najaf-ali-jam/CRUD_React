import React from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit";
import Update from "./Components/Update";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </div>
  );
};

export default App;
