import { tasksController } from "../../utils/tasksController";
import { taskMenuComponent } from "./taskMenu";

const taskComponent = (() => {
  const setUp = (taskId, task) => {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const taskTitle = document.createElement("p");
    const taskProject = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    taskContainer.addEventListener("click", openTaskMenu);
    taskContainer.id = `id${taskId}`;

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskProject.classList.add("task-project");
    taskDate.classList.add("task-date");
    taskEditButton.classList.add("task-edit-button");
    taskDeleteButton.classList.add("task-delete-button");

    taskTitle.textContent = task.name;
    taskProject.textContent = task.project;
    taskDate.textContent = task.date;

    taskCheckboxButton.style.backgroundColor = getPriorityColor(task.priority);

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

  function openTaskMenu(event) {
    const taskContainer = event.target;
    const id = taskContainer.id;
    const task = tasksController.getTask(id.substring(2));

    const taskMenu = taskMenuComponent.setUp(id, task);
    const tasksContainer = taskContainer.parentNode;

    const blocker = document.querySelector(".blocker");

    tasksContainer.insertBefore(taskMenu, taskContainer.nextSibling);
    taskContainer.classList.add("hide");
    blocker.classList.remove("hide");
  }

  function getPriorityColor(priority) {
    return { 1: "red", 2: "orange", 3: "blue", 4: "" }[priority];
  }

  return { setUp, updateTask };
})();

export { taskComponent };
