import { projectsMenu } from "./projectMenu";

const addNewProjectButton = (() => {
  const setUp = () => {
    const addProjectButton = document.createElement("button");

    addProjectButton.classList.add("add-button");
    addProjectButton.textContent = "+ Add Project";
    addProjectButton.addEventListener("click", openProjectMenu);

    return addProjectButton;
  };

  function openProjectMenu(event) {
    event.target.classList.add("hide");

    const mainContainer = event.target.parentNode;
    const project = createProject();
    const blocker = document.querySelector(".blocker");

    mainContainer.appendChild(projectsMenu.setUp(null, project));
    blocker.classList.remove("hide");
  }

  function createProject() {
    return {
      name: "",
      description: "",
      quick: false,
    };
  }

  return { setUp };
})();

export { addNewProjectButton };
