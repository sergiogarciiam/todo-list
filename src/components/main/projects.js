import { projectsController } from "../../utils/projectsController";
import { addNewButton } from "../element/addNewButton";
import { element } from "../element/element";

const projectsComponent = (() => {
  const setUp = () => {
    const projectsContainer = document.createElement("main");
    const projectsTitle = document.createElement("h1");

    projectsContainer.classList.add("projects-container");

    projectsTitle.classList.add("projects-title");
    projectsTitle.textContent = "Projects";

    projectsContainer.appendChild(createBlocker());
    projectsContainer.appendChild(projectsTitle);
    projectsContainer.appendChild(createProjectsSubContainer());
    projectsContainer.appendChild(addNewButton.setUpAddProject());

    return projectsContainer;
  };

  function createProjectsSubContainer() {
    const projectsSubContainer = document.createElement("div");
    const projectsDictionary = projectsController.getAllProjects();

    projectsSubContainer.classList.add("tasks-container");

    for (var key in projectsDictionary) {
      if (projectsDictionary.hasOwnProperty(key)) {
        projectsSubContainer.appendChild(
          element.setUpProject(key, projectsDictionary[key])
        );
      }
    }

    return projectsSubContainer;
  }

  function createBlocker() {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");

    return blocker;
  }

  return { setUp };
})();

export { projectsComponent };
