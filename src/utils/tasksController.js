const tasksController = (() => {
  let totalTasks = 0;
  let tasksDictionary = {};

  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasksDictionary = JSON.parse(storedTasks);
      totalTasks = getMaxKey();
    }
  };

  const createTask = (task) => {
    const taskId = totalTasks;
    tasksDictionary[totalTasks] = task;
    totalTasks++;
    saveTasksToLocalStorage();
    return taskId;
  };

  const updateTask = (id, task) => {
    tasksDictionary[id] = task;
    saveTasksToLocalStorage();
  };

  const getTask = (id) => {
    return tasksDictionary[id];
  };

  const deleteTask = (id) => {
    delete tasksDictionary[id];
    saveTasksToLocalStorage();
  };

  const getAllTasks = () => {
    return tasksDictionary;
  };

  const toggleCompleteTask = (id) => {
    tasksDictionary[id].isComplete = tasksDictionary[id].isComplete
      ? false
      : true;
    saveTasksToLocalStorage();
  };

  function getMaxKey() {
    const keys = Object.keys(tasksDictionary);
    if (keys.length === 0) {
      return 0;
    }
    return Math.max(...keys) + 1;
  }

  const deleteAllTasksFromProject = (project) => {
    for (let key in tasksDictionary) {
      if (tasksDictionary[key].project === project) {
        delete tasksDictionary[key];
      }
      saveTasksToLocalStorage();
    }
  };

  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasksDictionary));
  }

  return {
    loadTasksFromLocalStorage,
    createTask,
    updateTask,
    getTask,
    deleteTask,
    getAllTasks,
    toggleCompleteTask,
    deleteAllTasksFromProject,
  };
})();

export { tasksController };
