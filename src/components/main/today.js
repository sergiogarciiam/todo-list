import { dateController } from "../../utils/dateController";
import { tasksController } from "../../utils/tasksController";
import { addNewTaskButton } from "../tasks/addNewTaskButton";
import { taskComponent } from "../tasks/task";
import { blockerComponent } from "./blocker";

const todayComponent = (() => {
  const setUp = () => {
    const todayContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");

    todayContainer.classList.add("today-container");
    todayTitle.classList.add("today-title");

    todayTitle.textContent = "Today";

    todayContainer.appendChild(blockerComponent.setUp());
    todayContainer.appendChild(todayTitle);
    todayContainer.appendChild(createTasksContainer());
    todayContainer.appendChild(addNewTaskButton.setUp());

    return todayContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].date === dateController.getTodayDate()) {
          tasksContainer.appendChild(
            taskComponent.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  return { setUp };
})();

export { todayComponent };
