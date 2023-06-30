import { mainDisplayController } from "./controllers/mainDisplayController";
import { projectsController } from "./controllers/projectsController";
import { tasksController } from "./controllers/tasksController";

import "./assets/styles/main.css";
import "./assets/styles/week.css";
import "./assets/styles/specificProject.css";
import "./assets/styles/header.css";
import "./assets/styles/sidebar.css";
import "./assets/styles/element.css";
import "./assets/styles/elementMenu.css";
import "./assets/styles/deleteMenu.css";
import "./assets/styles/global.css";
import "./assets/styles/responsive.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

projectsController.loadProjectsFromLocalStorage();
tasksController.loadTasksFromLocalStorage();
mainDisplayController.setUp();
