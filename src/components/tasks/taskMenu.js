import { tasksController } from "../../utils/tasksController";
import { taskComponent } from "./task";
import { dateController } from "../../utils/dateController";
import { getPriorityColor } from "../../utils/priority";
import { deleteMenu } from "../deleteMenu";
import { projectsController } from "../../utils/projectsController";

const taskMenuComponent = (() => {
  let currentId = null;
  let currentTask = null;

  const setUp = (id, task) => {
    currentId = id;
    currentTask = task;

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

    inputTaskName.value = currentTask.name;
    checkbox.style.backgroundColor = getPriorityColor(currentTask.priority);

    deleteIcon.addEventListener("click", openDeleteMenu);
    deleteButton.addEventListener("click", openDeleteMenu);

    checkbox.appendChild(checkIcon);
    deleteButton.appendChild(deleteIcon);

    nameContainer.appendChild(checkbox);
    nameContainer.appendChild(inputTaskName);
    if (currentId !== null) nameContainer.appendChild(deleteButton);

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
    descriptionArea.value = currentTask.description;

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

    if (currentId === null) {
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
    menuContainer.appendChild(deleteMenu.setUp(currentId, currentTask));
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

    projectsSelection.value = currentTask.project;

    return projectsSelection;
  }

  function createPrioritySelection() {
    const prioritySelection = document.createElement("select");
    prioritySelection.classList.add("priority-select");

    prioritySelection.add(new Option("Priority 1", 1));
    prioritySelection.add(new Option("Priority 2", 2));
    prioritySelection.add(new Option("Priority 3", 3));
    prioritySelection.add(new Option("Priority 4", 4));

    prioritySelection.value = currentTask.priority;

    return prioritySelection;
  }

  function createDueDate() {
    const dueDateInput = document.createElement("input");

    dueDateInput.classList.add("due-date-input");
    dueDateInput.type = "date";
    dueDateInput.value = currentTask.date;

    return dueDateInput;
  }

  // UTIL BUTTONS CONTAINER
  function addTask() {
    currentTask = updateActualTask();

    const taskMenu = document.querySelector(".element-menu-container");
    const tasksContainer = taskMenu.parentNode.querySelector(
      ".elements-container"
    );
    const taskId = tasksController.createTask(currentTask);

    if (isCorrectContainer(tasksContainer.parentNode))
      tasksContainer.appendChild(taskComponent.setUp(taskId, currentTask));

    hideTaskMenuFromNew();
  }

  function updateTask() {
    currentTask = updateActualTask();

    tasksController.updateTask(currentId.substring(1), currentTask);
    taskComponent.updateTask(currentId.substring(1), currentTask);

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
    const task = document.querySelector(`#${currentId}`);
    const blocker = document.querySelector(".blocker");

    taskMenuContainer.remove();
    task.classList.remove("hide");
    blocker.classList.add("hide");
  }

  // MORE UTILITY
  function updateActualTask() {
    const newActualTask = currentTask;

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
      currentTask.project !== "Inbox"
    ) {
      bool = false;
    } else if (mainContainer.classList.contains("today-container")) {
      correctDate = dateController.getTodayDate();
      if (correctDate !== null && currentTask.date !== correctDate)
        bool = false;
    } else if (mainContainer.classList.contains("day-container")) {
      const dayOfWeek = getDateOfWeek(mainContainer);
      correctDate = dateController.getNextDayOfWeek(dayOfWeek);
      if (correctDate !== null && currentTask.date !== correctDate)
        bool = false;
    } else if (
      mainContainer.classList.contains("specific-project-container") &&
      currentTask.project === "Inbox"
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
