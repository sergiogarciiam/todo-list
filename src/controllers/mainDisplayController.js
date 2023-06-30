import { headerContainer } from "../components/containers/header";
import { sidebarContainer } from "../components/containers/sidebar";
import { inboxContainer } from "../components/containers/inbox";
import { todayContainer } from "../components/containers/today";
import { weekContainer } from "../components/containers/week";
import { projectsContainer } from "../components/containers/projects";
import { specificProjectContainer } from "../components/containers/specificProject";
import { blockerElement } from "../components/elements/blockerElement";

const mainDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(blockerElement.setUp());
    pageContainer.appendChild(headerContainer.setUp());
    pageContainer.appendChild(sidebarContainer.setUp());
    pageContainer.appendChild(inboxContainer.setUp());

    document.body.appendChild(pageContainer);
  };

  const setInbox = (event) => {
    setMarkToButton(event);
    removeMain();
    pageContainer.appendChild(inboxContainer.setUp());
  };

  const setToday = (event) => {
    setMarkToButton(event);
    removeMain();
    pageContainer.appendChild(todayContainer.setUp());
  };

  const setWeek = (event) => {
    setMarkToButton(event);
    removeMain();
    pageContainer.appendChild(weekContainer.setUp());
  };

  const setProjects = (event) => {
    setMarkToButton(event);
    removeMain();
    pageContainer.appendChild(projectsContainer.setUp());
  };

  const setSpecificProject = (id, project) => {
    setMarkToButton(null);
    removeMain();
    pageContainer.appendChild(specificProjectContainer.setUp(id, project));
  };

  function setMarkToButton(event) {
    const active = document.querySelector(".active");

    if (active !== null) {
      active.classList.remove("active");
    }

    if (event !== null && event.target.classList.contains("sidebar-button")) {
      console.log(event.target);
      event.target.classList.add("active");
    } else {
      const projectButton = document.querySelector(
        ".sidebar-button:last-child"
      );
      projectButton.classList.add("active");
    }
  }

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
