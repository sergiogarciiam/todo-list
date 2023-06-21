import { headerComponent } from "./header";
import { sidebarComponent } from "./sidebar";
import { inboxComponent } from "./inbox";

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

  function removeMain() {
    const main = document.querySelector("main");
    main.remove();
  }

  return { setUp, setInbox };
})();

export { mainDisplayController };
