import { Task } from "../../classes/task";
import { taskMenu } from "../menus/taskMenu";

const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", openTaskMenu);

    return addTaskButton;
  };

  function openTaskMenu(event) {
    event.target.classList.add("hide");

    const mainContainer = event.target.parentNode;
    const task = new Task(mainContainer);
    const blocker = document.querySelector(".blocker");

    mainContainer.appendChild(taskMenu.setUp(null, task));
    blocker.classList.remove("hide");
  }

  return { setUp };
})();

export { addNewTaskButton };
