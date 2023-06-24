import { addNewTaskButton } from "../tasks/addNewTask";

const weekComponent = (() => {
  const setUp = () => {
    const weekContainer = document.createElement("main");
    const todayTitle = document.createElement("h1");
    const daysContainer = document.createElement("div");

    weekContainer.classList.add("week-container");

    todayTitle.classList.add("week-title");
    todayTitle.textContent = "Week";

    daysContainer.classList.add("days-container");

    daysContainer.appendChild(createDay("Monday"));
    daysContainer.appendChild(createDay("Tuesday"));
    daysContainer.appendChild(createDay("Wednesday"));
    daysContainer.appendChild(createDay("Thursday"));
    daysContainer.appendChild(createDay("Friday"));
    daysContainer.appendChild(createDay("Saturday"));
    daysContainer.appendChild(createDay("Sunday"));

    weekContainer.appendChild(todayTitle);
    weekContainer.appendChild(daysContainer);

    return weekContainer;
  };

  function createDay(day) {
    const dayContainer = document.createElement("div");
    const dayTitle = document.createElement("h2");
    const tasksContainer = document.createElement("div");

    dayContainer.classList.add("day-container");
    dayTitle.classList.add("day-title");
    tasksContainer.classList.add("tasks-container");

    dayTitle.textContent = day;

    dayContainer.appendChild(dayTitle);
    dayContainer.appendChild(tasksContainer);
    dayContainer.appendChild(addNewTaskButton.setUp());

    return dayContainer;
  }

  return { setUp };
})();

export { weekComponent };
