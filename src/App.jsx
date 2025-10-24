import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiData from "./pages/ApiData";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
