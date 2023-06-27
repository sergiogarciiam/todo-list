import { mainDisplayController } from "./components/mainDisplayController";
import { projectsController } from "./utils/projectsController";
import { tasksController } from "./utils/tasksController";

import "./assets/styles/global.css";
import "./assets/styles/main/main.css";
import "./assets/styles/main/week.css";
import "./assets/styles/menu/header.css";
import "./assets/styles/menu/sidebar.css";
import "./assets/styles/tasks/task.css";
import "./assets/styles/tasks/taskMenu.css";
import "./assets/styles/tasks/taskDeleteMenu.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

projectsController.setUp();
tasksController.setUp();
mainDisplayController.setUp();
