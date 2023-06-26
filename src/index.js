import { mainDisplayController } from "./components/mainDisplayController";
import { projectsController } from "./utils/projectsController";
import { tasksController } from "./utils/tasksController";

import "./assets/styles/header.css";
import "./assets/styles/sidebar.css";
import "./assets/styles/main.css";
import "./assets/styles/week.css";
import "./assets/styles/task.css";
import "./assets/styles/taskMenu.css";
import "./assets/styles/global.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

projectsController.setUp();
tasksController.setUp();
mainDisplayController.setUp();
