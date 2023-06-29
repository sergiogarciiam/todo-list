import { tasksController } from "../../utils/tasksController";
import { mainDisplayController } from "../mainDisplayController";
import { addNewTaskButton } from "../tasks/addNewTaskButton";
import { taskComponent } from "../tasks/task";
import { blockerComponent } from "./blocker";

const specificProjectComponent = (() => {
  const setUp = (id, project) => {
    const specificProjectContainer = document.createElement("main");
    const backButton = document.createElement("button");
    const specificProjectTitle = document.createElement("h1");
    const backIcon = document.createElement("i");

    specificProjectContainer.classList.add("specific-project-container");
    backButton.classList.add("projects-back-button");
    specificProjectTitle.classList.add("specific-project-title");
    backIcon.className = "fa-solid fa-chevron-left";

    specificProjectContainer.id = `pr${id}`;
    specificProjectTitle.textContent = project.name;

    backButton.addEventListener("click", mainDisplayController.setProjects);
    backButton.appendChild(backIcon);

    specificProjectContainer.appendChild(blockerComponent.setUp());
    specificProjectContainer.appendChild(backButton);
    specificProjectContainer.appendChild(specificProjectTitle);
    specificProjectContainer.appendChild(createTasksContainer(id));
    specificProjectContainer.appendChild(addNewTaskButton.setUp());

    return specificProjectContainer;
  };

  function createTasksContainer(id) {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
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

  return { setUp };
})();

export { specificProjectComponent };
