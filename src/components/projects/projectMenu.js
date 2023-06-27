import { projectComponent } from "./project";
import { deleteMenu } from "../deleteMenu";
import { projectsController } from "../../utils/projectsController";

const projectsMenu = (() => {
  let actualId = null;
  let actualProject = null;

  const setUp = (id, project) => {
    actualId = id;
    actualProject = project;

    const projectMenuContainer = document.createElement("div");
    projectMenuContainer.classList.add("task-menu-container");

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

    nameContainer.classList.add("new-task-name-container");
    inputProjectName.classList.add("input-task-name");
    deleteButton.classList.add("task-delete-button");
    deleteIcon.className = "fa-solid fa-trash";

    inputProjectName.value = actualProject.name;

    deleteIcon.addEventListener("click", openDeleteMenu);
    deleteButton.addEventListener("click", openDeleteMenu);

    deleteButton.appendChild(deleteIcon);

    nameContainer.appendChild(inputProjectName);
    if (actualId !== null) nameContainer.appendChild(deleteButton);

    return nameContainer;
  }

  function createDescriptionContainer() {
    const descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("description-area");
    descriptionArea.value = actualProject.description;

    return descriptionArea;
  }

  function createButtonsContainer() {
    const buttonsContainer = document.createElement("div");
    const cancelButton = document.createElement("button");
    const confirmButton = document.createElement("button");

    buttonsContainer.classList.add("new-task-buttons-container");
    cancelButton.classList.add("cancel-add-task-button");
    confirmButton.classList.add("confirm-add-task-button");

    cancelButton.textContent = "Cancel";
    confirmButton.textContent = "Confirm";

    cancelButton.type = "button";
    confirmButton.type = "button";

    if (actualId === null) {
      cancelButton.addEventListener("click", hideMenuFromNew);
      confirmButton.addEventListener("click", addProject);
    } else {
      cancelButton.addEventListener("click", hideMenuFromUpdate);
      confirmButton.addEventListener("click", updateProject);
    }

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(confirmButton);

    return buttonsContainer;
  }

  // UTIL NAME CONTAINER
  function openDeleteMenu() {
    const menuContainer = document.querySelector(".task-menu-container");
    menuContainer.appendChild(deleteMenu.setUp(actualId, actualProject));
  }

  // UTIL BUTTONS CONTAINER
  function addProject() {
    actualProject = updateActualProject();

    const projectMenu = document.querySelector(".task-menu-container");
    const projectsContainer =
      projectMenu.parentNode.querySelector(".tasks-container");
    const projectId = projectsController.createProject(actualProject);

    projectsContainer.appendChild(
      projectComponent.setUp(projectId, actualProject)
    );

    hideMenuFromNew();
  }

  function updateProject() {
    actualProject = updateActualProject();

    projectsController.updateProject(actualId.substring(2), actualProject);
    projectComponent.updateProject(actualId.substring(2), actualProject);

    hideMenuFromUpdate();
  }

  function hideMenuFromNew() {
    const projectMenuContainer = document.querySelector(".task-menu-container");
    const addButton =
      projectMenuContainer.parentNode.querySelector(".add-button");
    const blocker = document.querySelector(".blocker");

    projectMenuContainer.remove();
    addButton.classList.remove("hide");
    blocker.classList.add("hide");
  }

  function hideMenuFromUpdate() {
    const projectMenuContainer = document.querySelector(".task-menu-container");
    const project = document.querySelector(`#pr${actualId}`);
    const blocker = document.querySelector(".blocker");

    projectMenuContainer.remove();
    project.classList.remove("hide");
    blocker.classList.add("hide");
  }

  // MORE UTILITY
  function updateActualProject() {
    const newActualProject = actualProject;

    const inputProjectName = document.querySelector(".input-task-name");
    const description = document.querySelector(".description-area");

    newActualProject.name = inputProjectName.value;
    newActualProject.description = description.value;

    return newActualProject;
  }

  return { setUp };
})();

export { projectsMenu };
