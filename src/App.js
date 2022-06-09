import React from "react";
import "./App.css";

import HomePage from "./components/HomePage";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path={"home/post:id"} element={<Post />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
