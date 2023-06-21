import { taskDisplayController } from "./taskDisplayController";

const inboxComponent = (() => {
  const setUp = () => {
    const inboxContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");

    inboxContainer.classList.add("inbox-container");

    inboxTitle.classList.add("inbox-title");
    inboxTitle.textContent = "Inbox";

    inboxContainer.appendChild(inboxTitle);
    inboxContainer.appendChild(taskDisplayController.buttonAddTaskSetUp());

    return inboxContainer;
  };

  return { setUp };
})();

export { inboxComponent };
