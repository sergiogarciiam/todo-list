import { headerComponent } from "./header";
import { sidebarComponent } from "./sidebar";
import { inboxComponent } from "./inbox";

const mainDisplayController = (() => {
  const setUp = () => {
    const pageContainer = document.createElement("div");

    pageContainer.classList.add("page-container");

    pageContainer.appendChild(headerComponent.setUp());
    pageContainer.appendChild(sidebarComponent.setUp());
    pageContainer.appendChild(inboxComponent.setUp());

    document.body.appendChild(pageContainer);
  };

  return { setUp };
})();

export { mainDisplayController };
