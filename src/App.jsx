import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiData from "./pages/ApiData";
<<<<<<< HEAD
=======
import "./App.css";
>>>>>>> 67c6e72 (Initial commit - Week 3 React Assignment)

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
=======
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
>>>>>>> 67c6e72 (Initial commit - Week 3 React Assignment)
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
<<<<<<< HEAD

=======
>>>>>>> 67c6e72 (Initial commit - Week 3 React Assignment)
