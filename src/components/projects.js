import { projectsController } from "../util/projectsController";
import { addNewTaskButton } from "./addNewTask";
import { projectComponent } from "./project";

const projectsComponent = (() => {
  const setUp = () => {
    const projectsContainer = document.createElement("main");
    const projectsTitle = document.createElement("h1");
    projectsContainer.classList.add("projects-container");

    projectsTitle.classList.add("projects-title");
    projectsTitle.textContent = "Projects";

    projectsContainer.appendChild(projectsTitle);
    //projectsContainer.appendChild(createProjects());
    projectsContainer.appendChild(addNewTaskButton.setUp());

    return projectsContainer;
  };

  function createProjects() {
    const projects = document.createElement("div");
    const projectsDictionary = projectsController.getAllProjects();

    projects.classList.add("projects");

    for (var key in projectsDictionary) {
      if (projectsDictionary.hasOwnProperty(key)) {
        projects.appendChild(
          projectComponent.setUp(key, projectsDictionary[key])
        );
      }
    }
  }

  return { setUp };
})();

export { projectsComponent };
