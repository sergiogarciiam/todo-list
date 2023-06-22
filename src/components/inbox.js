import { addNewTaskButton } from "./addNewTask";

const inboxComponent = (() => {
  const setUp = () => {
    const inboxContainer = document.createElement("main");
    const inboxTitle = document.createElement("h1");
    const tasksContainer = document.createElement("div");

    inboxContainer.classList.add("inbox-container");

    inboxTitle.classList.add("inbox-title");
    inboxTitle.textContent = "Inbox";

    tasksContainer.classList.add("tasks-container");

    inboxContainer.appendChild(inboxTitle);
    inboxContainer.appendChild(tasksContainer);
    inboxContainer.appendChild(addNewTaskButton.setUp());

    return inboxContainer;
  };

  return { setUp };
})();

export { inboxComponent };
