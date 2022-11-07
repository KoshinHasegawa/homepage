import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/root.css";
import "./App.css";

import Main from "./compornents/main";
import About from "./compornents/about";
import Todo from "./compornents/todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
