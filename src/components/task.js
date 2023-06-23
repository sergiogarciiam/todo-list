import { tasksController } from "../util/tasksController";
import { taskMenuComponent } from "./taskMenu";

const taskComponent = (() => {
  const setUp = (taskId, task) => {
    const taskContainer = document.createElement("div");
    const taskCheckboxButton = document.createElement("button");
    const taskTitle = document.createElement("p");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    taskContainer.addEventListener("click", openTaskMenu);
    taskContainer.id = `id${taskId}`;

    taskContainer.classList.add("task-container");
    taskCheckboxButton.classList.add("task-checkbox-button");
    taskTitle.classList.add("task-title");
    taskEditButton.classList.add("task-edit-button");
    taskDeleteButton.classList.add("task-delete-button");

    taskTitle.textContent = task.name;

    taskContainer.appendChild(taskCheckboxButton);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    return taskContainer;
  };

  function openTaskMenu(event) {
    const taskContainer = event.target;
    const id = taskContainer.id;
    const task = tasksController.getTask(id.substring(2));

    const taskMenu = taskMenuComponent.setUp(id, task);
    const tasksContainer = taskContainer.parentNode;

    tasksContainer.insertBefore(taskMenu, taskContainer.nextSibling);
    taskContainer.classList.add("hide");
  }

  return { setUp };
})();

export { taskComponent };
