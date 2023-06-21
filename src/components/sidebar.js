import { mainDisplayController } from "./mainDisplayController";

const sidebarComponent = (() => {
  const setUp = () => {
    const sidebarContainer = document.createElement("nav");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.appendChild(createSidebarButtonsContainer());
    sidebarContainer.appendChild(createQuickAccessContainer());
    sidebarContainer.appendChild(createSourceLink());

    return sidebarContainer;
  };

  function createSidebarButtonsContainer() {
    const sidebarButtonsContainer = document.createElement("div");

    const inbox = createButton("inbox");
    const today = createButton("today");
    const week = createButton("week");
    const projects = createButton("projects");

    sidebarButtonsContainer.classList.add("sidebar-buttons-container");

    inbox.addEventListener("click", mainDisplayController.setInbox);
    // add events to each button

    sidebarButtonsContainer.appendChild(inbox);
    sidebarButtonsContainer.appendChild(today);
    sidebarButtonsContainer.appendChild(week);
    sidebarButtonsContainer.appendChild(projects);

    return sidebarButtonsContainer;
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

    return sourceLink;
  }

  function createButton(name) {
    const button = document.createElement("button");
    button.textContent = name;
    button.classList.add(`${name}-button`);

    return button;
  }

  return { setUp };
})();

export { sidebarComponent };
