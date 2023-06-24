import { headerComponent } from "./main/header";
import { sidebarComponent } from "./main/sidebar";
import { inboxComponent } from "./menu/inbox";
import { todayComponent } from "./menu/today";
import { weekComponent } from "./menu/week";
import { projectsComponent } from "./menu/projects";

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

  function removeMain() {
    const main = document.querySelector("main");
    main.remove();
  }

  return { setUp, setInbox, setToday, setWeek, setProjects };
})();

export { mainDisplayController };
