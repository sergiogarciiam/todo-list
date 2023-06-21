const newTaskComponent = (() => {
  const setUp = () => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");

    newTaskContainer.appendChild(createNewTaskNameContainer());
    newTaskContainer.appendChild(createNewTaskFeaturesContainer());
    newTaskContainer.appendChild(createNewTaskDescriptionContainer());
    newTaskContainer.appendChild(createNewTaskButtonsContainer());

    return newTaskContainer;
  };

  function createNewTaskNameContainer() {
    const newTaskNameContainer = document.createElement("div");
    const checkbox = document.createElement("div");
    const inputTaskName = document.createElement("input");

    newTaskNameContainer.classList.add("new-task-name-container");
    checkbox.classList.add("new-task-name-container");
    inputTaskName.classList.add("input-task-name");

    newTaskNameContainer.appendChild(checkbox);
    newTaskNameContainer.appendChild(inputTaskName);

    return newTaskNameContainer;
  }

  function createNewTaskFeaturesContainer() {
    const newTaskFeaturesContainer = document.createElement("div");
    const projectsSelection = document.createElement("select");
    const dueDateSelection = document.createElement("select");
    const prioritySelection = document.createElement("select");

    newTaskFeaturesContainer.appendChild(projectsSelection);
    newTaskFeaturesContainer.appendChild(dueDateSelection);
    newTaskFeaturesContainer.appendChild(prioritySelection);

    return newTaskFeaturesContainer;
  }

  function createNewTaskDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    return descriptionArea;
  }
  function createNewTaskButtonsContainer() {
    const newTaskButtonsContainer = document.createElement("div");
    const cancelAddTaskButton = document.createElement("button");
    const confirmAddTaskButton = document.createElement("button");

    cancelAddTaskButton.classList.add("cancel-add-task-button");
    cancelAddTaskButton.textContent = "Cancel";
    cancelAddTaskButton.type = "button";

    confirmAddTaskButton.classList.add("confirm-add-task-button");
    confirmAddTaskButton.textContent = "Add task";
    confirmAddTaskButton.type = "button";

    newTaskButtonsContainer.appendChild(cancelAddTaskButton);

    newTaskButtonsContainer.appendChild(confirmAddTaskButton);

    return newTaskButtonsContainer;
  }

  return { setUp };
})();

export { newTaskComponent };
