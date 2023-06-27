import { dateController } from "../../utils/dateController";
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
    event.target.classList.add("hide");

    const parent = event.target.parentNode;
    const task = createTask(parent);
    const blocker = document.querySelector(".blocker");

    parent.appendChild(taskMenuComponent.setUp(null, task));
    blocker.classList.remove("hide");
  }

  function createTask(parent) {
    let task = {
      name: "",
      project: "Inbox",
      priority: "4",
      date: "",
      description: "",
      complete: false,
    };

    if (parent.classList.contains("today-container")) {
      task.date = dateController.getTodayDate();
    } else if (parent.classList.contains("day-container")) {
      var dayOfWeek = Array.from(parent.parentNode.children).indexOf(parent);
      task.date = dateController.getNextDayOfWeek(dayOfWeek);
    }

    return task;
  }

  return { setUp };
})();

export { addNewTaskButton };
