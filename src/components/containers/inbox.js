import { tasksController } from "../../controllers/tasksController";
import { addNewTaskButton } from "../buttons/addNewTaskButton";
import { taskElement } from "../elements/taskElement";
import { blockerElement } from "../elements/blockerElement";

const inboxContainer = (() => {
  const setUp = () => {
    const mainContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");

    mainContainer.classList.add("inbox-container");
    inboxTitle.classList.add("inbox-title");

    inboxTitle.textContent = "Inbox";

    mainContainer.appendChild(blockerElement.setUp());
    mainContainer.appendChild(inboxTitle);
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
        if (tasksDictionary[key].project === "Inbox") {
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

export { inboxContainer };
