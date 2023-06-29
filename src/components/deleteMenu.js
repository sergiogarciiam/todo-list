import { projectsController } from "../utils/projectsController";
import { tasksController } from "../utils/tasksController";

const deleteMenu = (() => {
  let currentId = null;

  const setUp = (id, task) => {
    currentId = id;

    const deleteMenuContainer = document.createElement("div");
    const confirmMessage = document.createElement("p");
    const buttonsContainer = document.createElement("div");
    const confirmButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    deleteMenuContainer.classList.add("delete-menu-container");

    confirmMessage.textContent = `Are you sure you want to delete ${task.name}?`;
    confirmButton.textContent = "Delete";
    cancelButton.textContent = "Cancel";

    confirmButton.addEventListener("click", deleteElement);
    cancelButton.addEventListener("click", hideDeleteMenu);

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(confirmButton);

    deleteMenuContainer.appendChild(confirmMessage);
    deleteMenuContainer.appendChild(buttonsContainer);

    return deleteMenuContainer;
  };

  function deleteElement(event) {
    const taskContainer = event.target.parentNode.parentNode.parentNode;
    const blocker = document.querySelector(".blocker");

    if (isTask()) {
      tasksController.deleteTask(currentId.substring(1));
    } else {
      projectsController.deleteProject(currentId.substring(1));
    }
    taskContainer.remove();
    blocker.classList.add("hide");
  }

  function hideDeleteMenu(event) {
    const deleteMenu = event.target.parentNode.parentNode;
    const blocker = document.querySelector(".blocker");

    deleteMenu.remove();
    blocker.classList.add("hide");
  }

  function isTask() {
    return currentId.slice(0, 1) === "t";
  }

  return { setUp };
})();

export { deleteMenu };
