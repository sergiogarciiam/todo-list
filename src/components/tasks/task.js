import { getPriorityColor } from "../../utils/priority";
import { tasksController } from "../../utils/tasksController";
import { taskDeleteMenuComponent } from "./taskDeleteMenu";
import { taskMenuComponent } from "./taskMenu";

const taskComponent = (() => {
  const setUp = (taskId, task) => {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const checkIcon = document.createElement("i");
    const taskTitle = document.createElement("p");
    const taskProject = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const editIcon = document.createElement("i");
    const taskDeleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");

    taskContainer.addEventListener("click", doAction);
    taskContainer.id = `id${taskId}`;

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskProject.classList.add("task-project");
    taskDate.classList.add("task-date");
    taskEditButton.classList.add("task-edit-button");
    taskDeleteButton.classList.add("task-delete-button");

    checkIcon.className = "fa-solid fa-check";
    editIcon.className = "fa-solid fa-pen";
    deleteIcon.className = "fa-solid fa-trash";

    taskTitle.textContent = task.name;
    taskProject.textContent = task.project;
    taskDate.textContent = task.date;

    taskCheckboxButton.style.backgroundColor = getPriorityColor(task.priority);

    if (task.complete) {
      checkIcon.classList.add("complete");
      taskTitle.classList.add("complete");
    }

    taskCheckboxButton.appendChild(checkIcon);
    taskEditButton.appendChild(editIcon);
    taskDeleteButton.appendChild(deleteIcon);

    taskContainer.appendChild(taskCheckboxButton);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskProject);
    if (taskDate.textContent !== "") taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    return taskContainer;
  };

  const updateTask = (taskId, task) => {
    const taskContainer = document.querySelector(`#id${taskId}`);
    const taskTitle = taskContainer.querySelector(".task-title");
    const taskCheckboxButton = taskContainer.querySelector(
      ".task-checkbox-button"
    );
    const taskProject = taskContainer.querySelector(".task-project");
    const taskEditButton = taskContainer.querySelector(".task-edit-button");

    let taskDate = taskContainer.querySelector(".task-date");

    taskTitle.textContent = task.name;
    taskProject.textContent = task.project;
    taskCheckboxButton.style.backgroundColor = getPriorityColor(task.priority);

    if (taskDate !== null) taskDate.remove();

    taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.date;

    if (taskDate.textContent !== "")
      taskContainer.insertBefore(taskDate, taskEditButton);
  };

  function doAction(event) {
    const target = event.target;
    const targetClass = target.classList;
    const parentTargetClass = target.parentNode.classList;

    if (
      targetClass.contains("task-container") ||
      targetClass.contains("task-edit-button") ||
      targetClass.contains("fa-pen") ||
      parentTargetClass.contains("fa-pen")
    ) {
      openTaskMenu(target.closest(".task-container"));
    } else if (
      targetClass.contains("task-checkbox-button") ||
      targetClass.contains("fa-check")
    ) {
      completeTask(target.closest(".task-container"));
    } else if (
      targetClass.contains("task-delete-button") ||
      targetClass.contains("fa-trash") ||
      parentTargetClass.contains("fa-trash")
    ) {
      openDeleteMenu(target.closest(".task-container"));
      const blocker = document.querySelector(".blocker");
      blocker.classList.remove("hide");
    }
  }
  function openTaskMenu(target) {
    const taskContainer = target;
    const id = taskContainer.id;
    const task = tasksController.getTask(id.substring(2));

    const taskMenu = taskMenuComponent.setUp(id, task);
    const tasksContainer = taskContainer.parentNode;

    const blocker = document.querySelector(".blocker");

    tasksContainer.insertBefore(taskMenu, taskContainer.nextSibling);
    taskContainer.classList.add("hide");
    blocker.classList.remove("hide");
  }

  function completeTask(taskContainer) {
    const id = taskContainer.id.substring(2);
    const title = taskContainer.querySelector(".task-title");
    const check = taskContainer
      .querySelector(".task-checkbox-button")
      .querySelector("svg");

    console.log(check);
    tasksController.toggleCompleteTask(id);
    title.classList.toggle("complete");
    check.classList.toggle("complete");
  }

  function openDeleteMenu(taskContainer) {
    const id = taskContainer.id;
    const task = tasksController.getTask(id.substring(2));

    taskContainer.appendChild(taskDeleteMenuComponent.setUp(id, task));
  }

  return { setUp, updateTask };
})();

export { taskComponent };
