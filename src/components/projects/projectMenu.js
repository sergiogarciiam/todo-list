import { projectComponent } from "./project";
import { deleteMenu } from "../deleteMenu";
import { projectsController } from "../../utils/projectsController";

const projectsMenu = (() => {
  let currentId = null;
  let currentProject = null;

  const setUp = (id, project) => {
    currentId = id;
    currentProject = project;

    const projectMenuContainer = document.createElement("div");
    projectMenuContainer.classList.add("element-menu-container");

    projectMenuContainer.appendChild(createNameContainer());
    projectMenuContainer.appendChild(createDescriptionContainer());
    projectMenuContainer.appendChild(createButtonsContainer());

    return projectMenuContainer;
  };

  // MAIN FUNCTIONS
  function createNameContainer() {
    const nameContainer = document.createElement("div");
    const inputProjectName = document.createElement("input");
    const deleteButton = document.createElement("button");

    const deleteIcon = document.createElement("i");

    nameContainer.classList.add("menu-name-container");
    inputProjectName.classList.add("input-element-name");
    deleteButton.classList.add("element-delete-button");

    deleteIcon.className = "fa-solid fa-trash";

    inputProjectName.value = currentProject.name;

    deleteIcon.addEventListener("click", openDeleteMenu);
    deleteButton.addEventListener("click", openDeleteMenu);

    deleteButton.appendChild(deleteIcon);

    nameContainer.appendChild(inputProjectName);
    if (currentId !== null) nameContainer.appendChild(deleteButton);

    return nameContainer;
  }

  function createDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    descriptionArea.value = currentProject.description;

    return descriptionArea;
  }

  function createButtonsContainer() {
    const buttonsContainer = document.createElement("div");
    const cancelButton = document.createElement("button");
    const confirmButton = document.createElement("button");

    buttonsContainer.classList.add("menu-buttons-container");

    cancelButton.textContent = "Cancel";
    confirmButton.textContent = "Confirm";

    cancelButton.type = "button";
    confirmButton.type = "button";

    if (currentId === null) {
      cancelButton.addEventListener("click", hideProjectMenuFromNew);
      confirmButton.addEventListener("click", addProject);
    } else {
      cancelButton.addEventListener("click", hideProjectMenuFromUpdate);
      confirmButton.addEventListener("click", updateProject);
    }

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(confirmButton);

    return buttonsContainer;
  }

  // UTIL NAME CONTAINER
  function openDeleteMenu() {
    const menuContainer = document.querySelector(".element-menu-container");
    menuContainer.appendChild(deleteMenu.setUp(currentId, currentProject));
  }

  // UTIL BUTTONS CONTAINER
  function addProject() {
    currentProject = updateActualProject();

    const projectMenu = document.querySelector(".element-menu-container");
    const projectsContainer = projectMenu.parentNode.querySelector(
      ".elements-container"
    );
    const projectId = projectsController.createProject(currentProject);

    projectsContainer.appendChild(
      projectComponent.setUp(projectId, currentProject)
    );

    hideProjectMenuFromNew();
  }

  function updateProject() {
    currentProject = updateActualProject();

    projectsController.updateProject(currentId.substring(1), currentProject);
    projectComponent.updateProject(currentId.substring(1), currentProject);

    hideProjectMenuFromUpdate();
  }

  function hideProjectMenuFromNew() {
    const projectMenuContainer = document.querySelector(
      ".element-menu-container"
    );
    const addButton =
      projectMenuContainer.parentNode.querySelector(".add-button");
    const blocker = document.querySelector(".blocker");

    projectMenuContainer.remove();
    addButton.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function hideProjectMenuFromUpdate() {
    const projectMenuContainer = document.querySelector(
      ".element-menu-container"
    );
    const project = document.querySelector(`#${currentId}`);
    const blocker = document.querySelector(".blocker");

    projectMenuContainer.remove();
    project.classList.remove("hide");
    blocker.classList.add("hide");
  }

  // MORE UTILITY
  function updateActualProject() {
    const newActualProject = currentProject;

    const inputProjectName = document.querySelector(".input-element-name");
    const description = document.querySelector(".description-area");

    newActualProject.name = inputProjectName.value;
    newActualProject.description = description.value;

    return newActualProject;
  }

  return { setUp };
})();

export { projectsMenu };
