import { tasksController } from "../../utils/tasksController";
import { addNewTaskButton } from "../tasks/addNewTaskButton";
import { taskComponent } from "../tasks/task";
import { blockerComponent } from "./blocker";

const inboxComponent = (() => {
  const setUp = () => {
    const inboxContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");

    inboxContainer.classList.add("inbox-container");
    inboxTitle.classList.add("inbox-title");

    inboxTitle.textContent = "Inbox";

    inboxContainer.appendChild(blockerComponent.setUp());
    inboxContainer.appendChild(inboxTitle);
    inboxContainer.appendChild(createTasksContainer());
    inboxContainer.appendChild(addNewTaskButton.setUp());

    return inboxContainer;
  };

  function createTasksContainer() {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].project === "Inbox") {
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

export { inboxComponent };
