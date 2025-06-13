import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import CLI from "./pages/CLI";

function App() {
  return (
    <div className="h-screen flex w-screen bg-sidebar overflow-hidden">
      <Router>
       
        <Sidebar />
        

        <div className="flex flex-col flex-1 h-full">
          <Navbar />
          

          {/* Main content area for routed components */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<CLI />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
