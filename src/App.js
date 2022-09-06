import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Card from "./components/Cards/Card";
import Filter from "./components/Filters/Filter";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
