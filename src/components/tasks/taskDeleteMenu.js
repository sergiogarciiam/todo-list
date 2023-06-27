import { tasksController } from "../../utils/tasksController";

const taskDeleteMenuComponent = (() => {
  let actualId = null;

  const setUp = (id, task) => {
    actualId = id;

    const deleteMenuContainer = document.createElement("div");
    const confirmMessage = document.createElement("p");
    const buttonsContainer = document.createElement("div");
    const confirmButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    deleteMenuContainer.classList.add("delete-menu-container");

    confirmMessage.textContent = `Are you sure you want to delete ${task.name}?`;
    confirmButton.textContent = "Delete";
    cancelButton.textContent = "Cancel";

    confirmButton.addEventListener("click", deleteTask);
    cancelButton.addEventListener("click", hideDeleteMenu);

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(confirmButton);

    deleteMenuContainer.appendChild(confirmMessage);
    deleteMenuContainer.appendChild(buttonsContainer);

    return deleteMenuContainer;
  };

  function deleteTask(event) {
    const taskContainer = event.target.parentNode.parentNode.parentNode;
    const blocker = document.querySelector(".blocker");

    tasksController.deleteTask(actualId.substring(2));
    taskContainer.remove();
    blocker.classList.add("hide");
  }

  function hideDeleteMenu(event) {
    const deleteMenu = event.target.parentNode.parentNode;
    const blocker = document.querySelector(".blocker");

    deleteMenu.remove();
    blocker.classList.add("hide");
  }

  return { setUp };
})();

export { taskDeleteMenuComponent };
