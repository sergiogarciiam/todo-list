const taskDisplayController = (() => {
  const buttonAddTaskSetUp = () => {
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";

    return addTaskButton;
  };

  return { buttonAddTaskSetUp };
})();

export { taskDisplayController };
