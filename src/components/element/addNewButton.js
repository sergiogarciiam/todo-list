import { dateController } from "../../utils/dateController";
import { elementMenu } from "./elementMenu";

const addNewButton = (() => {
  const setUpAddTask = () => {
    const addButton = document.createElement("button");

    addButton.classList.add("add-task-button");
    addButton.textContent = "+ Add task";
    addButton.addEventListener("click", openTaskMenu);

    return addButton;
  };

  const setUpAddProject = () => {
    const addButton = document.createElement("button");

    addButton.classList.add("add-task-button");
    addButton.textContent = "+ Add Project";
    addButton.addEventListener("click", openProjectMenu);

    return addButton;
  };

  function openTaskMenu(event) {
    event.target.classList.add("hide");

    const mainContainer = event.target.parentNode;
    const task = createTask(mainContainer);
    const blocker = document.querySelector(".blocker");

    mainContainer.appendChild(elementMenu.setUpTaskMenu(null, task));
    blocker.classList.remove("hide");
  }

  function openProjectMenu(event) {
    event.target.classList.add("hide");

    const mainContainer = event.target.parentNode;
    const project = createProject();
    const blocker = document.querySelector(".blocker");

    mainContainer.appendChild(elementMenu.setUpProjectMenu(null, project));
    blocker.classList.remove("hide");
  }

  function createTask(mainContainer) {
    let task = {
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
    }

    return task;
  }

  function createProject() {
    return {
      name: "",
      color: "",
      quick: false,
    };
  }

  function getDayOfWeek(mainContainer) {
    return Array.from(mainContainer.parentNode.children).indexOf(mainContainer);
  }

  return { setUpAddTask, setUpAddProject };
})();

export { addNewButton };
