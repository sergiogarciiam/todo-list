import { dateController } from "../../controllers/dateController";
import { tasksController } from "../../controllers/tasksController";
import { addNewTaskButton } from "../buttons/addNewTaskButton";
import { taskElement } from "../elements/taskElement";
import { blockerElement } from "../elements/blockerElement";

const weekContainer = (() => {
  const setUp = () => {
    const mainContainer = document.createElement("main");
    const weekTitle = document.createElement("h1");
    const daysContainer = document.createElement("div");

    mainContainer.classList.add("week-container");
    weekTitle.classList.add("week-title");
    daysContainer.classList.add("days-container");

    weekTitle.textContent = "Week";

    daysContainer.appendChild(createDay("Monday"));
    daysContainer.appendChild(createDay("Tuesday"));
    daysContainer.appendChild(createDay("Wednesday"));
    daysContainer.appendChild(createDay("Thursday"));
    daysContainer.appendChild(createDay("Friday"));
    daysContainer.appendChild(createDay("Saturday"));
    daysContainer.appendChild(createDay("Sunday"));

    mainContainer.appendChild(weekTitle);
    mainContainer.appendChild(daysContainer);

    return mainContainer;
  };

  function createDay(day) {
    const dayContainer = document.createElement("div");
    const dayTitle = document.createElement("h2");
    const numberDay = getNumberDay(day);

    dayContainer.classList.add("day-container");
    dayTitle.classList.add("day-title");

    dayTitle.textContent = day;

    dayContainer.appendChild(dayTitle);
    dayContainer.appendChild(createTasksContainer(numberDay));
    dayContainer.appendChild(addNewTaskButton.setUp());

    return dayContainer;
  }

  function createTasksContainer(numberDay) {
    const tasksContainer = document.createElement("div");
    const tasksDictionary = tasksController.getAllTasks();

    tasksContainer.classList.add("elements-container");

    for (let key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (
          tasksDictionary[key].date ===
          dateController.getNextDayOfWeek(numberDay)
        ) {
          tasksContainer.appendChild(
            taskElement.setUp(key, tasksDictionary[key])
          );
        }
      }
    }

    return tasksContainer;
  }

  function getNumberDay(day) {
    return {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
      Sunday: 6,
    }[day];
  }

  return { setUp };
})();

export { weekContainer };
