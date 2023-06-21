import { newTaskComponent } from "./newTask";

const addNewTaskButton = (() => {
  const setUp = () => {
    const addTaskButton = document.createElement("button");

    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add task";
    addTaskButton.addEventListener("click", newTaskSetUp);

    return addTaskButton;
  };

  function newTaskSetUp(event) {
    event.target.classList.add("hide");
    event.target.parentNode.appendChild(newTaskComponent.setUp());
  }

  return { setUp };
})();

export { addNewTaskButton };
