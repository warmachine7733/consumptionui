import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/home";


const RoutePaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutePaths;
