import { projectsController } from "../../controllers/projectsController";
import { mainDisplayController } from "../../controllers/mainDisplayController";
import { deleteMenu } from "../menus/deleteMenu";
import { projectsMenu } from "../menus/projectMenu";

const projectElement = (() => {
  // PUBLIC FUNCTIONS
  const setUp = (id, project) => {
    const projectContainer = document.createElement("div");
    const projectPoint = document.createElement("div");
    const projectTitle = document.createElement("p");
    const projectQuickButton = document.createElement("button");
    const projectEditButton = document.createElement("button");
    const projectDeleteButton = document.createElement("button");

    const starIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    projectContainer.addEventListener("click", doAction);
    projectContainer.id = `p${id}`;

    projectContainer.classList.add("element-container");
    projectPoint.classList.add("project-point");
    projectTitle.classList.add("element-title");
    projectQuickButton.classList.add("project-quick-button");
    projectEditButton.classList.add("element-edit-button");
    projectDeleteButton.classList.add("element-delete-button");

    if (project.isQuick) {
      starIcon.className = "fa-solid fa-star star-active";
      projectQuickButton.classList.add("quick-active");
    } else {
      starIcon.className = "fa-regular fa-star";
    }

    editIcon.className = "fa-solid fa-pen";
    deleteIcon.className = "fa-solid fa-trash";

    projectTitle.textContent = project.name;

    projectQuickButton.appendChild(starIcon);
    projectEditButton.appendChild(editIcon);
    projectDeleteButton.appendChild(deleteIcon);

    projectContainer.appendChild(projectPoint);
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectQuickButton);
    projectContainer.appendChild(projectEditButton);
    projectContainer.appendChild(projectDeleteButton);

    return projectContainer;
  };

  const updateProject = (id, project) => {
    const projectContainer = document.querySelector(`#p${id}`);
    const projectTitle = projectContainer.querySelector(".element-title");

    projectTitle.textContent = project.name;
  };

  // UTIL SETUP FUNCTIONS
  function doAction(event) {
    const target = event.target;
    const targetClass = target.classList;
    const parentTargetClass = target.parentNode.classList;

    if (
      targetClass.contains("element-title") ||
      targetClass.contains("element-container") ||
      targetClass.contains("project-point")
    ) {
      openSpecificProject(target.closest(".element-container"));
    } else if (
      targetClass.contains("element-edit-button") ||
      targetClass.contains("fa-pen") ||
      parentTargetClass.contains("fa-pen")
    ) {
      openProjectMenu(target.closest(".element-container"));
    } else if (
      targetClass.contains("element-delete-button") ||
      targetClass.contains("fa-trash") ||
      parentTargetClass.contains("fa-trash")
    ) {
      openDeleteMenu(target.closest(".element-container"));
      const blocker = document.querySelector(".blocker");
      blocker.classList.remove("hide");
    } else if (
      targetClass.contains("project-quick-button") ||
      targetClass.contains("fa-star") ||
      parentTargetClass.contains("fa-star")
    ) {
      addQuickProject(target.closest(".element-container"));
    }
  }

  function openSpecificProject(targetProject) {
    const id = targetProject.id.substring(1);
    const project = projectsController.getProject(id);

    mainDisplayController.setSpecificProject(id, project);
  }

  function openProjectMenu(target) {
    const projectContainer = target;
    const id = projectContainer.id;
    const projectsContainer = projectContainer.parentNode;
    const blocker = document.querySelector(".blocker");
    const project = projectsController.getProject(id.substring(1));
    const menu = projectsMenu.setUp(id, project);

    projectsContainer.insertBefore(menu, projectContainer.nextSibling);
    projectContainer.classList.add("hide");
    blocker.classList.remove("hide");
  }

  function openDeleteMenu(projectContainer) {
    const id = projectContainer.id;
    let element = null;

    element = projectsController.getProject(id.substring(1));
    projectContainer.appendChild(deleteMenu.setUp(id, element));
  }

  function addQuickProject(projectContainer) {
    const quickProjectsContainer = document.querySelector(".quick-projects");
    const id = projectContainer.id.substring(1);
    const project = projectsController.getProject(id);

    const button = projectContainer.querySelector(".project-quick-button");
    const star = projectContainer.querySelector("svg");

    if (!star.classList.contains("star-active")) {
      quickProjectsContainer.appendChild(createQuickProject(id, project));

      star.classList.remove("fa-regular");
      star.classList.add("fa-solid");
      star.classList.toggle("star-active");
      projectsController.toggleQuick(id);
      button.classList.toggle("quick-active");
    } else {
      const quickProject = quickProjectsContainer.querySelector(`#quick${id}`);
      quickProject.remove();

      star.classList.add("fa-regular");
      star.classList.remove("fa-solid");
      star.classList.toggle("star-active");
      projectsController.toggleQuick(id);
      button.classList.toggle("quick-active");
    }
  }

  function createQuickProject(id, project) {
    const quickProject = document.createElement("button");
    quickProject.textContent = project.name;
    quickProject.id = `quick${id}`;
    quickProject.addEventListener("click", openProject);
    return quickProject;
  }

  function openProject(event) {
    const id = event.target.id.substring(5);
    const project = projectsController.getProject(id);
    mainDisplayController.setSpecificProject(id, project);
  }

  return { setUp, updateProject };
})();

export { projectElement };
