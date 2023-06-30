import { tasksController } from "../../controllers/tasksController";
import { mainDisplayController } from "../../controllers/mainDisplayController";
import { addNewTaskButton } from "../buttons/addNewTaskButton";
import { taskElement } from "../elements/taskElement";
import { blockerElement } from "../elements/blockerElement";

const specificProjectContainer = (() => {
  const setUp = (id, project) => {
    const mainContainer = document.createElement("main");
    const backButton = document.createElement("button");
    const specificProjectTitle = document.createElement("h1");
    const backIcon = document.createElement("i");

    mainContainer.classList.add("specific-project-container");
    backButton.classList.add("projects-back-button");
    specificProjectTitle.classList.add("specific-project-title");
    backIcon.className = "fa-solid fa-chevron-left";

    mainContainer.id = `p${id}`;
    specificProjectTitle.textContent = project.name;

    backButton.addEventListener("click", mainDisplayController.setProjects);
    backButton.appendChild(backIcon);

    mainContainer.appendChild(backButton);
    mainContainer.appendChild(specificProjectTitle);
    mainContainer.appendChild(createTasksContainer(id));
    mainContainer.appendChild(addNewTaskButton.setUp());

    return mainContainer;
  };

  function createTasksContainer(id) {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (tasksDictionary[key].project === id) {
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

export { specificProjectContainer };
