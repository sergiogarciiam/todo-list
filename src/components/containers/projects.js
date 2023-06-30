import { projectsController } from "../../controllers/projectsController";
import { addNewProjectButton } from "../buttons/addNewProjectButton";
import { projectElement } from "../elements/projectElement";
import { blockerElement } from "../elements/blockerElement";

const projectsContainer = (() => {
  const setUp = () => {
    const mainContainer = document.createElement("main");
    const projectsTitle = document.createElement("h1");

    mainContainer.classList.add("projects-container");
    projectsTitle.classList.add("projects-title");

    projectsTitle.textContent = "Projects";

    mainContainer.appendChild(projectsTitle);
    mainContainer.appendChild(createProjectsSubContainer());
    mainContainer.appendChild(addNewProjectButton.setUp());

    return mainContainer;
  };

  function createProjectsSubContainer() {
    const projectsSubContainer = document.createElement("div");
    const projectsDictionary = projectsController.getAllProjects();

    projectsSubContainer.classList.add("elements-container");

    for (let key in projectsDictionary) {
      if (projectsDictionary.hasOwnProperty(key)) {
        projectsSubContainer.appendChild(
          projectElement.setUp(key, projectsDictionary[key])
        );
      }
    }

    return projectsSubContainer;
  }

  return { setUp };
})();

export { projectsContainer };
