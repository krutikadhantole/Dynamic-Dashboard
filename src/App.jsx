import React from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Dashboard from "./components/Dashboard"; // ✅ Import your main dashboard
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Dashboard />
    </div>
  );
}

export default App;
