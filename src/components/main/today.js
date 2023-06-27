import { dateController } from "../../utils/dateController";
import { tasksController } from "../../utils/tasksController";
import { addNewButton } from "../element/addNewButton";
import { element } from "../element/element";

const todayComponent = (() => {
  const setUp = () => {
    const todayContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    todayContainer.classList.add("today-container");

    todayTitle.classList.add("today-title");
    todayTitle.textContent = "Today";

    todayContainer.appendChild(createBlocker());
    todayContainer.appendChild(todayTitle);
    todayContainer.appendChild(createTasksContainer());
    todayContainer.appendChild(addNewButton.setUpAddTask());

    return todayContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("tasks-container");

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].date === dateController.getTodayDate()) {
          tasksContainer.appendChild(
            element.setUpTask(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  function createBlocker() {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");

    return blocker;
  }

  return { setUp };
})();

export { todayComponent };
