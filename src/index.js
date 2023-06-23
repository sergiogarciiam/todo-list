import { mainDisplayController } from "./components/mainDisplayController";
import { projectsController } from "./util/projectsController";
import { tasksController } from "./utils/tasksController";

import "./assets/styles/header.css";
import "./assets/styles/sidebar.css";
import "./assets/styles/main.css";
import "./assets/styles/week.css";
import "./assets/styles/task.css";
import "./assets/styles/taskMenu.css";
import "./assets/styles/global.css";

projectsController.setUp();
tasksController.setUp();
mainDisplayController.setUp();
