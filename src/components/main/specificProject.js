import { tasksController } from "../../utils/tasksController";
import { addNewTaskButton } from "../tasks/addNewTaskButton";
import { taskComponent } from "../tasks/task";

const specificProjectComponent = (() => {
  const setUp = (id, project) => {
    const specificProjectContainer = document.createElement("main");
    const specificProjectTitle = document.createElement("h1");

    specificProjectContainer.id = `pr${id}`;
    specificProjectContainer.classList.add("specific-project-container");

    specificProjectTitle.classList.add("specific-project-title");
    specificProjectTitle.textContent = `Projects > ${project.name}`;

    specificProjectContainer.appendChild(createBlocker());
    specificProjectContainer.appendChild(specificProjectTitle);
    specificProjectContainer.appendChild(createTasksContainer(id));
    specificProjectContainer.appendChild(addNewTaskButton.setUp());

    return specificProjectContainer;
  };

  function createTasksContainer(id) {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("tasks-container");

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].project === id) {
          tasksContainer.appendChild(
            taskComponent.setUp(key, tasksDictionary[key])
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

export { specificProjectComponent };
