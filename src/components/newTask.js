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

    newTaskFeaturesContainer.classList.add("new-task-features-container");

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

    newTaskButtonsContainer.classList.add("new-task-buttons-container");

    cancelAddTaskButton.classList.add("cancel-add-task-button");
    cancelAddTaskButton.textContent = "Cancel";
    cancelAddTaskButton.type = "button";
    cancelAddTaskButton.addEventListener("click", cancelCreation);

    confirmAddTaskButton.classList.add("confirm-add-task-button");
    confirmAddTaskButton.textContent = "Add task";
    confirmAddTaskButton.type = "button";
    confirmAddTaskButton.addEventListener("click", addTask);

    newTaskButtonsContainer.appendChild(cancelAddTaskButton);
    newTaskButtonsContainer.appendChild(confirmAddTaskButton);

    return newTaskButtonsContainer;
  }

  function addTask() {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const taskTitle = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    const tasksContainer = document.querySelector(".tasks-container");
    const inputTaskName = document.querySelector(".input-task-name");

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskEditButton.classList.add("task-edit");
    taskDeleteButton.classList.add("task-delete-button");

    taskTitle.textContent = inputTaskName.value;

    taskContainer.appendChild(taskCheckboxButton);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    tasksContainer.appendChild(taskContainer);
  }

  function cancelCreation() {
    const newTask = document.querySelector(".new-task-container");
    const addTaskButton = document.querySelector(".add-task-button");

    newTask.remove();
    addTaskButton.classList.remove("hide");
  }

  return { setUp };
})();

export { newTaskComponent };
