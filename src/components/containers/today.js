import { dateController } from "../../controllers/dateController";
import { tasksController } from "../../controllers/tasksController";
import { addNewTaskButton } from "../buttons/addNewTaskButton";
import { taskElement } from "../elements/taskElement";
import { blockerElement } from "../elements/blockerElement";

const todayContainer = (() => {
  const setUp = () => {
    const mainContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");

    mainContainer.classList.add("today-container");
    todayTitle.classList.add("today-title");

    todayTitle.textContent = "Today";

    mainContainer.appendChild(blockerElement.setUp());
    mainContainer.appendChild(todayTitle);
    mainContainer.appendChild(createTasksContainer());
    mainContainer.appendChild(addNewTaskButton.setUp());

    return mainContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].date === dateController.getTodayDate()) {
          tasksContainer.appendChild(
            taskElement.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  return { setUp };
})();

export { todayContainer };
