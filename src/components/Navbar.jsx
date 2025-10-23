import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">My App</span>

        <div className="flex items-center space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</a>
          <a href="/tasks" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Tasks</a>
          <a href="/api-data" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">API Data</a>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm text-gray-800 dark:text-gray-100"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


