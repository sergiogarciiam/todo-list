import { tasksController } from "../../utils/tasksController";
import { taskComponent } from "./task";
import { dateController } from "../../utils/dateController";
import { getPriorityColor } from "../../utils/priority";
import { taskDeleteMenuComponent } from "./taskDeleteMenu";

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
    const deleteButton = document.createElement("button");
    const checkIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    checkbox.classList.add("task-checkbox-button");
    newTaskNameContainer.classList.add("new-task-name-container");
    inputTaskName.classList.add("input-task-name");
    deleteButton.classList.add("task-delete-button");

    checkIcon.className = "fa-solid fa-check";
    deleteIcon.className = "fa-solid fa-trash";

    inputTaskName.value = actualTask.name;
    checkbox.style.backgroundColor = getPriorityColor(actualTask.priority);

    deleteIcon.addEventListener("click", openDeleteMenu);
    deleteButton.addEventListener("click", openDeleteMenu);

    checkbox.appendChild(checkIcon);
    deleteButton.appendChild(deleteIcon);

    newTaskNameContainer.appendChild(checkbox);
    newTaskNameContainer.appendChild(inputTaskName);
    if (actualId !== null) newTaskNameContainer.appendChild(deleteButton);

    return newTaskNameContainer;
  }

  function openDeleteMenu() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    taskMenuContainer.appendChild(
      taskDeleteMenuComponent.setUp(actualId, actualTask)
    );
  }

  function createNewTaskFeaturesContainer() {
    const newTaskFeaturesContainer = document.createElement("div");
    newTaskFeaturesContainer.classList.add("new-task-features-container");

    newTaskFeaturesContainer.appendChild(createProjectSelection());
    newTaskFeaturesContainer.appendChild(createPrioritySelection());
    newTaskFeaturesContainer.appendChild(createDueDate());

    return newTaskFeaturesContainer;
  }

  function createNewTaskDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    descriptionArea.value = actualTask.description;
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
    actualTask = updateActualTask();

    const taskMenu = document.querySelector(".task-menu-container");
    const tasksContainer =
      taskMenu.parentNode.querySelector(".tasks-container");

    const taskId = tasksController.createTask(actualTask);

    if (isCorrectDate(tasksContainer.parentNode))
      tasksContainer.appendChild(taskComponent.setUp(taskId, actualTask));

    hideTaskMenuFromNew();
  }

  function updateTask() {
    actualTask = updateActualTask();

    tasksController.updateTask(actualId.substring(2), actualTask);
    taskComponent.updateTask(actualId.substring(2), actualTask);

    hideTaskMenuFromUpdate();
  }

  function updateActualTask() {
    const newActualTask = actualTask;

    const inputTaskName = document.querySelector(".input-task-name");
    const projectsSelection = document.querySelector(".project-select");
    const prioritySelection = document.querySelector(".priority-select");
    const dueDate = document.querySelector(".due-date-input");
    const description = document.querySelector(".description-area");

    newActualTask.name = inputTaskName.value;
    newActualTask.project = projectsSelection.value;
    newActualTask.priority = prioritySelection.value;
    newActualTask.date = dueDate.value;
    newActualTask.description = description.value;

    return newActualTask;
  }

  function hideTaskMenuFromNew() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const addTaskButton =
      taskMenuContainer.parentNode.querySelector(".add-task-button");
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    addTaskButton.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function hideTaskMenuFromUpdate() {
    const taskMenuContainer = document.querySelector(".task-menu-container");
    const task = document.querySelector(`#${actualId}`);
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    task.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function createProjectSelection() {
    const projectsSelection = document.createElement("select");
    projectsSelection.classList.add("project-select");

    projectsSelection.add(new Option("Inbox", "Inbox"));

    projectsSelection.value = actualTask.project;

    return projectsSelection;
  }

  function createPrioritySelection() {
    const prioritySelection = document.createElement("select");
    prioritySelection.classList.add("priority-select");

    prioritySelection.add(new Option("Priority 1", 1));
    prioritySelection.add(new Option("Priority 2", 2));
    prioritySelection.add(new Option("Priority 3", 3));
    prioritySelection.add(new Option("Priority 4", 4));

    prioritySelection.value = actualTask.priority;

    return prioritySelection;
  }

  function createDueDate() {
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("due-date-input");
    dueDateInput.type = "date";

    dueDateInput.value = actualTask.date;

    return dueDateInput;
  }

  function isCorrectDate(container) {
    let bool = true;
    let correctDate = null;

    if (container.classList.contains("today-container")) {
      correctDate = dateController.getTodayDate();
    } else if (container.classList.contains("day-container")) {
      const dayOfWeek = Array.from(container.parentNode.children).indexOf(
        container
      );
      correctDate = dateController.getNextDayOfWeek(dayOfWeek);
    }

    if (correctDate !== null && actualTask.date !== correctDate) bool = false;

    return bool;
  }

  return { setUp };
})();

export { taskMenuComponent };
