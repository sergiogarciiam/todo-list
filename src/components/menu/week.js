import { dateController } from "../../utils/dateController";
import { tasksController } from "../../utils/tasksController";
import { addNewTaskButton } from "../tasks/addNewTask";
import { taskComponent } from "../tasks/task";

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

    tasksContainer.classList.add("tasks-container");
    console.log(dateController.getNextDayOfWeek(numberDay));

    for (var key in tasksDictionary) {
      if (tasksDictionary.hasOwnProperty(key)) {
        if (
          tasksDictionary[key].date ===
          dateController.getNextDayOfWeek(numberDay)
        ) {
          tasksContainer.appendChild(
            taskComponent.setUp(key, tasksDictionary[key])
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

export { weekComponent };
