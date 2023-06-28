import { projectsController } from "../../utils/projectsController";
import { deleteMenu } from "../deleteMenu";
import { projectsMenu } from "./projectMenu";
import { mainDisplayController } from "../mainDisplayController";

const projectComponent = (() => {
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
    projectContainer.id = `pr${id}`;

    projectContainer.classList.add("task-container");
    projectPoint.classList.add("project-point");
    projectTitle.classList.add("task-title");
    projectQuickButton.classList.add("project-quick-button");
    projectEditButton.classList.add("task-edit-button");
    projectDeleteButton.classList.add("task-delete-button");

    if (project.quick) {
      starIcon.className = "fa-solid fa-star active";
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
    const projectContainer = document.querySelector(`#pr${id}`);
    const projectTitle = projectContainer.querySelector(".task-title");

    projectTitle.textContent = project.name;
  };

  // UTIL SETUP FUNCTIONS
  function doAction(event) {
    const target = event.target;
    const targetClass = target.classList;
    const parentTargetClass = target.parentNode.classList;

    if (
      targetClass.contains("task-title") ||
      targetClass.contains("task-container")
    ) {
      openSpecificProject(target.closest(".task-container"));
    } else if (
      targetClass.contains("task-edit-button") ||
      targetClass.contains("fa-pen") ||
      parentTargetClass.contains("fa-pen")
    ) {
      openProjectMenu(target.closest(".task-container"));
    } else if (
      targetClass.contains("task-delete-button") ||
      targetClass.contains("fa-trash") ||
      parentTargetClass.contains("fa-trash")
    ) {
      openDeleteMenu(target.closest(".task-container"));
      const blocker = document.querySelector(".blocker");
      blocker.classList.remove("hide");
    } else if (
      targetClass.contains("project-quick-button") ||
      targetClass.contains("fa-star") ||
      parentTargetClass.contains("fa-star")
    ) {
      addQuickProject(target.closest(".task-container"));
    }
  }

  function openSpecificProject(targetProject) {
    const id = targetProject.id.substring(2);
    const project = projectsController.getProject(id);
    mainDisplayController.setSpecificProject(id, project);
  }

  function openProjectMenu(target) {
    const projectContainer = target;
    const id = projectContainer.id;
    const projectsContainer = projectContainer.parentNode;
    const blocker = document.querySelector(".blocker");
    const project = projectsController.getProject(id.substring(2));
    const menu = projectsMenu.setUp(id, project);

    projectsContainer.insertBefore(menu, projectContainer.nextSibling);
    projectContainer.classList.add("hide");
    blocker.classList.remove("hide");
  }

  function openDeleteMenu(projectContainer) {
    const id = projectContainer.id;
    let element = null;

    element = projectsController.getProject(id.substring(2));
    projectContainer.appendChild(deleteMenu.setUp(id, element));
  }

  function addQuickProject(projectContainer) {
    const id = projectContainer.id.substring(2);
    const button = projectContainer.querySelector(".project-quick-button");
    const star = projectContainer.querySelector("svg");

    if (!star.classList.contains("active")) {
      star.classList.remove("fa-regular");
      star.classList.add("fa-solid");
      star.classList.toggle("active");
      projectsController.toggleQuick(id);
      button.classList.toggle("quick-active");
    } else {
      star.classList.add("fa-regular");
      star.classList.remove("fa-solid");
      star.classList.toggle("active");
      projectsController.toggleQuick(id);
      button.classList.toggle("quick-active");
    }
  }

  return { setUp, updateProject };
})();

export { projectComponent };
