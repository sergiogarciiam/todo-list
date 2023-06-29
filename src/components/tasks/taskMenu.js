import { tasksController } from "../../utils/tasksController";
import { taskComponent } from "./task";
import { dateController } from "../../utils/dateController";
import { getPriorityColor } from "../../utils/priority";
import { deleteMenu } from "../deleteMenu";
import { projectsController } from "../../utils/projectsController";

const taskMenuComponent = (() => {
  let actualId = null;
  let actualTask = null;

  const setUp = (id, task) => {
    actualId = id;
    actualTask = task;

    const taskMenuContainer = document.createElement("div");
    taskMenuContainer.classList.add("element-menu-container");

    taskMenuContainer.appendChild(createNameContainer());
    taskMenuContainer.appendChild(createFeaturesContainer());
    taskMenuContainer.appendChild(createDescriptionContainer());
    taskMenuContainer.appendChild(createButtonsContainer());

    return taskMenuContainer;
  };

  // MAIN FUNCTIONS
  function createNameContainer() {
    const nameContainer = document.createElement("div");
    const checkbox = document.createElement("button");
    const inputTaskName = document.createElement("input");
    const deleteButton = document.createElement("button");

    const checkIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    checkbox.classList.add("task-checkbox-button");
    nameContainer.classList.add("menu-name-container");
    inputTaskName.classList.add("input-element-name");
    deleteButton.classList.add("element-delete-button");

    checkIcon.className = "fa-solid fa-check";
    deleteIcon.className = "fa-solid fa-trash";

    inputTaskName.value = actualTask.name;
    checkbox.style.backgroundColor = getPriorityColor(actualTask.priority);

    deleteIcon.addEventListener("click", openDeleteMenu);
    deleteButton.addEventListener("click", openDeleteMenu);

    checkbox.appendChild(checkIcon);
    deleteButton.appendChild(deleteIcon);

    nameContainer.appendChild(checkbox);
    nameContainer.appendChild(inputTaskName);
    if (actualId !== null) nameContainer.appendChild(deleteButton);

    return nameContainer;
  }

  function createFeaturesContainer() {
    const featuresContainer = document.createElement("div");
    featuresContainer.classList.add("menu-features-container");

    featuresContainer.appendChild(createProjectSelection());
    featuresContainer.appendChild(createPrioritySelection());
    featuresContainer.appendChild(createDueDate());

    return featuresContainer;
  }

  function createDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    descriptionArea.value = actualTask.description;

    return descriptionArea;
  }

  function createButtonsContainer() {
    const buttonsContainer = document.createElement("div");
    const cancelAddTaskButton = document.createElement("button");
    const confirmAddTaskButton = document.createElement("button");

    buttonsContainer.classList.add("menu-buttons-container");

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

    buttonsContainer.appendChild(cancelAddTaskButton);
    buttonsContainer.appendChild(confirmAddTaskButton);

    return buttonsContainer;
  }

  // UTIL NAME CONTAINER
  function openDeleteMenu() {
    const menuContainer = document.querySelector(".element-menu-container");
    menuContainer.appendChild(deleteMenu.setUp(actualId, actualTask));
  }

  // UTIL FEATURES CONTAINER
  function createProjectSelection() {
    const projectsSelection = document.createElement("select");
    const projectsDictionary = projectsController.getAllProjects();

    projectsSelection.classList.add("project-select");
    projectsSelection.add(new Option("Inbox", "Inbox"));

    for (var key in projectsDictionary) {
      if (projectsDictionary.hasOwnProperty(key)) {
        const name = projectsDictionary[key].name;
        projectsSelection.add(new Option(name, key));
      }
    }

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

  // UTIL BUTTONS CONTAINER
  function addTask() {
    actualTask = updateActualTask();

    const taskMenu = document.querySelector(".element-menu-container");
    const tasksContainer = taskMenu.parentNode.querySelector(
      ".elements-container"
    );
    const taskId = tasksController.createTask(actualTask);

    if (isCorrectContainer(tasksContainer.parentNode))
      tasksContainer.appendChild(taskComponent.setUp(taskId, actualTask));

    hideTaskMenuFromNew();
  }

  function updateTask() {
    actualTask = updateActualTask();

    tasksController.updateTask(actualId.substring(1), actualTask);
    taskComponent.updateTask(actualId.substring(1), actualTask);

    hideTaskMenuFromUpdate();
  }

  function hideTaskMenuFromNew() {
    const taskMenuContainer = document.querySelector(".element-menu-container");
    const addTaskButton =
      taskMenuContainer.parentNode.querySelector(".add-button");
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    addTaskButton.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function hideTaskMenuFromUpdate() {
    const taskMenuContainer = document.querySelector(".element-menu-container");
    const task = document.querySelector(`#${actualId}`);
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    task.classList.remove("hide");
    blocker.classList.add("hide");
  }

  // MORE UTILITY
  function updateActualTask() {
    const newActualTask = actualTask;

    const inputTaskName = document.querySelector(".input-element-name");
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

  function isCorrectContainer(mainContainer) {
    let bool = true;
    let correctDate = null;

    if (
      mainContainer.classList.contains("inbox-container") &&
      actualTask.project !== "Inbox"
    ) {
      bool = false;
    } else if (mainContainer.classList.contains("today-container")) {
      correctDate = dateController.getTodayDate();
      if (correctDate !== null && actualTask.date !== correctDate) bool = false;
    } else if (mainContainer.classList.contains("day-container")) {
      const dayOfWeek = getDateOfWeek(mainContainer);
      correctDate = dateController.getNextDayOfWeek(dayOfWeek);
      if (correctDate !== null && actualTask.date !== correctDate) bool = false;
    } else if (
      mainContainer.classList.contains("specific-project-container") &&
      actualTask.project === "Inbox"
    ) {
      bool = false;
    }
    return bool;
  }

  function getDateOfWeek(mainContainer) {
    return Array.from(mainContainer.parentNode.children).indexOf(mainContainer);
  }

  return { setUp };
})();

export { taskMenuComponent };
