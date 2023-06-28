import { headerComponent } from "./menu/header";
import { sidebarComponent } from "./menu/sidebar";
import { inboxComponent } from "./main/inbox";
import { todayComponent } from "./main/today";
import { weekComponent } from "./main/week";
import { projectsComponent } from "./main/projects";
import { specificProjectComponent } from "./main/specificProject";

const mainDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(headerComponent.setUp());
    pageContainer.appendChild(sidebarComponent.setUp());
    pageContainer.appendChild(inboxComponent.setUp());

    document.body.appendChild(pageContainer);
  };

  const setInbox = () => {
    removeMain();
    pageContainer.appendChild(inboxComponent.setUp());
  };

  const setToday = () => {
    removeMain();
    pageContainer.appendChild(todayComponent.setUp());
  };

  const setWeek = () => {
    removeMain();
    pageContainer.appendChild(weekComponent.setUp());
  };

  const setProjects = () => {
    removeMain();
    pageContainer.appendChild(projectsComponent.setUp());
  };

  const setSpecificProject = (id, project) => {
    removeMain();
    pageContainer.appendChild(specificProjectComponent.setUp(id, project));
  };

  function removeMain() {
    const main = document.querySelector("main");
    main.remove();
  }

  return {
    setUp,
    setInbox,
    setToday,
    setWeek,
    setProjects,
    setSpecificProject,
  };
})();

export { mainDisplayController };
