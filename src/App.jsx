import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiData from "./pages/ApiData";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow p-6 max-w-7xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
                  <h1 className="text-3xl font-bold mb-4">PLP Task Manager</h1>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
                  </p>

                  {/* Counter */}
                  <div className="flex items-center gap-4 my-4">
                    <button
                      onClick={() => setCount((count) => count - 1)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{count}</span>
                    <button
                      onClick={() => setCount((count) => count + 1)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              }
            />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

