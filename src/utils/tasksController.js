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
      complete: false,
    };
    tasksDictionary[totalTasks] = task;
    totalTasks = Object.keys(tasksDictionary).length;
  };

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

  const getAllTasks = () => {
    return tasksDictionary;
  };

  const toggleCompleteTask = (id) => {
    tasksDictionary[id].complete = tasksDictionary[id].complete ? false : true;
  };

  return {
    setUp,
    createTask,
    updateTask,
    getTask,
    deleteTask,
    getAllTasks,
    toggleCompleteTask,
  };
})();

export { tasksController };
