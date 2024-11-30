import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import GroupDetails from "./components/GroupDetails";
import SaibaMais from "./components/SaibaMais";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups/:id" element={<GroupDetails />} />
        <Route path="/saibamais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
}

export default App;
