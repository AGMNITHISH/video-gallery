import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Favorites from "../pages/Favorites";

const Content = () => {
  return (
    <div className="h-full bg-slate-200">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default Content;
