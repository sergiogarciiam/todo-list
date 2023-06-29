import { headerContainer } from "../components/containers/header";
import { sidebarContainer } from "../components/containers/sidebar";
import { inboxContainer } from "../components/containers/inbox";
import { todayContainer } from "../components/containers/today";
import { weekContainer } from "../components/containers/week";
import { projectsContainer } from "../components/containers/projects";
import { specificProjectContainer } from "../components/containers/specificProject";

const mainDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(headerContainer.setUp());
    pageContainer.appendChild(sidebarContainer.setUp());
    pageContainer.appendChild(inboxContainer.setUp());

    document.body.appendChild(pageContainer);
  };

  const setInbox = () => {
    removeMain();
    pageContainer.appendChild(inboxContainer.setUp());
  };

  const setToday = () => {
    removeMain();
    pageContainer.appendChild(todayContainer.setUp());
  };

  const setWeek = () => {
    removeMain();
    pageContainer.appendChild(weekContainer.setUp());
  };

  const setProjects = () => {
    removeMain();
    pageContainer.appendChild(projectsContainer.setUp());
  };

  const setSpecificProject = (id, project) => {
    removeMain();
    pageContainer.appendChild(specificProjectContainer.setUp(id, project));
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
