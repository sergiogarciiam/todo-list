import { mainDisplayController } from "../mainDisplayController";

const sidebarComponent = (() => {
  const setUp = () => {
    const sidebarContainer = document.createElement("nav");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.appendChild(createButtonsContainer());
    sidebarContainer.appendChild(createQuickAccessContainer());
    sidebarContainer.appendChild(createSourceLink());

    return sidebarContainer;
  };

  function createButtonsContainer() {
    const buttonsContainer = document.createElement("div");

    const inbox = createButton("Inbox");
    const today = createButton("Today");
    const week = createButton("Week");
    const projects = createButton("Projects");

    buttonsContainer.classList.add("sidebar-buttons-container");

    inbox.addEventListener("click", mainDisplayController.setInbox);
    today.addEventListener("click", mainDisplayController.setToday);
    week.addEventListener("click", mainDisplayController.setWeek);
    projects.addEventListener("click", mainDisplayController.setProjects);

    buttonsContainer.appendChild(inbox);
    buttonsContainer.appendChild(today);
    buttonsContainer.appendChild(week);
    buttonsContainer.appendChild(projects);

    return buttonsContainer;
  }

  function createQuickAccessContainer() {
    const quickAccessContainer = document.createElement("div");
    const quickAccessTitle = document.createElement("p");

    quickAccessContainer.classList.add("quick-access-container");

    quickAccessTitle.classList.add("quick-access");
    quickAccessTitle.textContent = "Quick Access";

    quickAccessContainer.appendChild(quickAccessTitle);

    return quickAccessContainer;
  }

  function createSourceLink() {
    const sourceLink = document.createElement("a");
    sourceLink.classList.add("source-link");
    sourceLink.textContent = "source";
    sourceLink.href = "https://github.com/sergiogarciiam/todo-list";

    return sourceLink;
  }

  function createButton(name) {
    const button = document.createElement("button");
    button.textContent = name;

    return button;
  }

  return { setUp };
})();

export { sidebarComponent };
