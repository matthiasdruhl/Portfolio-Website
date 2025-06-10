import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 overflow-hidden">
      <Router>
        {/* Top Navbar */}
        <Navbar />

        <div className="flex h-full">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Main content area for routed components */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
