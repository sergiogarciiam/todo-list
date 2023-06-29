import { projectsController } from "../../utils/projectsController";
import { addNewProjectButton } from "../projects/addNewProjectButton";
import { projectComponent } from "../projects/project";
import { blockerComponent } from "./blocker";

const projectsComponent = (() => {
  const setUp = () => {
    const projectsContainer = document.createElement("main");
    const projectsTitle = document.createElement("h1");

    projectsContainer.classList.add("projects-container");
    projectsTitle.classList.add("projects-title");

    projectsTitle.textContent = "Projects";

    projectsContainer.appendChild(blockerComponent.setUp());
    projectsContainer.appendChild(projectsTitle);
    projectsContainer.appendChild(createProjectsSubContainer());
    projectsContainer.appendChild(addNewProjectButton.setUp());

    return projectsContainer;
  };

  function createProjectsSubContainer() {
    const projectsSubContainer = document.createElement("div");
    const projectsDictionary = projectsController.getAllProjects();

    projectsSubContainer.classList.add("elements-container");

    for (let key in projectsDictionary) {
      if (projectsDictionary.hasOwnProperty(key)) {
        projectsSubContainer.appendChild(
          projectComponent.setUp(key, projectsDictionary[key])
        );
      }
    }

    return projectsSubContainer;
  }

  return { setUp };
})();

export { projectsComponent };
