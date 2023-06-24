import { addNewTaskButton } from "../tasks/addNewTask";

const todayComponent = (() => {
  const setUp = () => {
    const todayContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    const tasksContainer = document.createElement("div");

    todayContainer.classList.add("today-container");

    todayTitle.classList.add("today-title");
    todayTitle.textContent = "Today";

    tasksContainer.classList.add("tasks-container");

    todayContainer.appendChild(todayTitle);
    todayContainer.appendChild(tasksContainer);
    todayContainer.appendChild(addNewTaskButton.setUp());

    return todayContainer;
  };

  return { setUp };
})();

export { todayComponent };
