import { tasksController } from "../util/tasksController";
import { taskComponent } from "./task";

const taskMenuComponent = (() => {
  let actualId = null;
  let actualTask = null;

  const setUp = (id, task) => {
    const taskMenuContainer = document.createElement("div");

    actualId = id;
    actualTask = task;

    taskMenuContainer.classList.add("task-menu-container");

    taskMenuContainer.appendChild(createNewTaskNameContainer());
    taskMenuContainer.appendChild(createNewTaskFeaturesContainer());
    taskMenuContainer.appendChild(createNewTaskDescriptionContainer());
    taskMenuContainer.appendChild(createNewTaskButtonsContainer());

    return taskMenuContainer;
  };

  function createNewTaskNameContainer() {
    const newTaskNameContainer = document.createElement("div");
    const checkbox = document.createElement("button");
    const inputTaskName = document.createElement("input");

    newTaskNameContainer.classList.add("new-task-name-container");
    inputTaskName.classList.add("input-task-name");
    inputTaskName.value = actualTask.name;

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
    confirmAddTaskButton.classList.add("confirm-add-task-button");

    cancelAddTaskButton.textContent = "Cancel";
    confirmAddTaskButton.textContent = "Confirm";

    cancelAddTaskButton.type = "button";
    confirmAddTaskButton.type = "button";

    if (actualId === null) {
      cancelAddTaskButton.addEventListener("click", hideTaskMenuFromNew);
      confirmAddTaskButton.addEventListener("click", addTask);
    } else {
      cancelAddTaskButton.addEventListener("click", hideTaskMenuFromUpdate);
      confirmAddTaskButton.addEventListener("click", updateTask);
    }

    newTaskButtonsContainer.appendChild(cancelAddTaskButton);
    newTaskButtonsContainer.appendChild(confirmAddTaskButton);

    return newTaskButtonsContainer;
  }

  function addTask() {
    updateActualTask();

    const tasksContainer = document.querySelector(".tasks-container");

    const taskId = tasksController.createTask(actualTask);
    tasksContainer.appendChild(taskComponent.setUp(taskId, actualTask));

    hideTaskMenuFromNew();
  }

  function updateTask() {
    updateActualTask();

    tasksController.updateTask(actualId.substring(2), actualTask);
    // update task

    hideTaskMenuFromUpdate();
  }

  function updateActualTask() {
    const inputTaskName = document.querySelector(".input-task-name");
    actualTask.name = inputTaskName.value;
  }

  function hideTaskMenuFromNew() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const addTaskButton = document.querySelector(".add-task-button");

    taskMenuContainer.remove();
    addTaskButton.classList.remove("hide");
  }

  function hideTaskMenuFromUpdate() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const task = document.querySelector(`#${actualId}`);

    taskMenuContainer.remove();
    task.classList.remove("hide");
  }

  return { setUp };
})();

export { taskMenuComponent };
