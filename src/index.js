import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OurTeam from "./components/OurTeam";
import Reserve from "./components/Reserve";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/OurTeam" element={<OurTeam />} />
      <Route path="/Reserve" element={<Reserve />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
