import { taskController } from "../utils/taskController";
import { taskMenuComponent } from "./taskMenu";

const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", openTaskMenu);

    return addTaskButton;
  };

  function openTaskMenu(event) {
    let task = {
      name: "",
    };

    event.target.classList.add("hide");
    event.target.parentNode.appendChild(taskMenuComponent.setUp(null, task));
  }

  return { setUp };
})();

export { addNewTaskButton };
