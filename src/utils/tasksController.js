const tasksController = (() => {
  let totalTasks = 0;
  let tasksDictionary = {};

  const setUp = () => {
    let task = {
      name: "Hello",
      project: "Inbox",
      priority: "1",
      date: "",
      description: "Bye!!",
    };
    tasksDictionary[totalTasks] = task;
    totalTasks = 1;
  };

  const createTask = (task) => {
    const taskId = totalTasks;
    tasksDictionary[totalTasks] = task;
    totalTasks++;
    return taskId;
  };

  const updateTask = (id, task) => {
    tasksDictionary[id] = task;
    console.log(task);
  };

  const getTask = (id) => {
    return tasksDictionary[id];
  };

  const deleteTask = (id) => {
    delete tasksDictionary[id];
  };

  const getAllTasks = () => {
    return tasksDictionary;
  };

  return { setUp, createTask, updateTask, getTask, deleteTask, getAllTasks };
})();

export { tasksController };
