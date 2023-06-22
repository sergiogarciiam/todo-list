import { taskMenuComponent } from "./taskMenu";

const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", menuTaskSetUp);

    return addTaskButton;
  };

  function menuTaskSetUp(event) {
    let task = {
      name: "",
    };

    event.target.classList.add("hide");
    event.target.parentNode.appendChild(taskMenuComponent.setUp(task));
  }

  return { setUp };
})();

export { addNewTaskButton };
