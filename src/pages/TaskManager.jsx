import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border rounded-md px-3 py-2 focus:outline-none dark:bg-gray-800 dark:text-white"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      <div className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              className="flex justify-between items-center p-3"
            >
              <span
                className={`cursor-pointer ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 dark:text-white"
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;


