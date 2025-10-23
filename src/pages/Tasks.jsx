import TaskManager from "./TaskManager";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Task Manager
      </h1>
      <TaskManager />
    </div>
  );
};

export default Tasks;
