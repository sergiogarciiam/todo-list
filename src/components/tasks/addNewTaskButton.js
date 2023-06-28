import { dateController } from "../../utils/dateController";
import { taskMenuComponent } from "./taskMenu";

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
    const task = createTask(mainContainer);
    const blocker = document.querySelector(".blocker");

    mainContainer.appendChild(taskMenuComponent.setUp(null, task));
    blocker.classList.remove("hide");
  }

  function createTask(mainContainer) {
    const task = {
      name: "",
      project: "Inbox",
      priority: "4",
      date: "",
      description: "",
      complete: false,
    };

    if (mainContainer.classList.contains("today-container")) {
      task.date = dateController.getTodayDate();
    } else if (mainContainer.classList.contains("day-container")) {
      const dayOfWeek = getDayOfWeek(mainContainer);
      task.date = dateController.getNextDayOfWeek(dayOfWeek);
    } else if (mainContainer.classList.contains("specific-project-container")) {
      task.project = mainContainer.id.substring(2);
    }

    return task;
  }

  function getDayOfWeek(mainContainer) {
    return Array.from(mainContainer.parentNode.children).indexOf(mainContainer);
  }

  return { setUp };
})();

export { addNewTaskButton };
