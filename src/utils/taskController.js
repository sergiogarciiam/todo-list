const taskController = (() => {
  let totalTasks = 0;
  let tasksDictionary = {};

  const createTask = (task) => {
    const taskId = totalTasks;
    tasksDictionary[totalTasks] = task;
    totalTasks++;
    return taskId;
  };

  const updateTask = (id, task) => {
    tasksDictionary[id] = task;
  };

  const getTask = (id) => {
    return tasksDictionary[id];
  };

  const deleteTask = (id) => {
    delete tasksDictionary[id];
  };

  return { createTask, updateTask, getTask, deleteTask };
})();

export { taskController };
