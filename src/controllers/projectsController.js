import { tasksController } from "./tasksController";
import { Project } from "../classes/project";

const projectsController = (() => {
  let totalProjects = 0;
  let projectsDictionary = {};

  const loadProjectsFromLocalStorage = () => {
    let storedProjects = localStorage.getItem("projects");

    if (storedProjects) {
      storedProjects = JSON.parse(storedProjects);

      for (let key in storedProjects) {
        const projectObj = storedProjects[key];
        const project = new Project();

        project.name = projectObj._name;
        project.description = projectObj._description;
        project.isQuick = projectObj._isQuick;

        projectsDictionary[key] = project;
      }

      totalProjects = getMaxKey();
    }
  };

  const createProject = (project) => {
    const projectId = totalProjects;
    projectsDictionary[totalProjects] = project;
    totalProjects++;
    saveProjectsToLocalStorage();
    return projectId;
  };

  const updateProject = (id, project) => {
    projectsDictionary[id] = project;
    saveProjectsToLocalStorage();
  };

  const getProject = (id) => {
    return projectsDictionary[id];
  };

  const deleteProject = (id) => {
    tasksController.deleteAllTasksFromProject(id);
    delete projectsDictionary[id];
    saveProjectsToLocalStorage();
  };

  const getAllProjects = () => {
    return projectsDictionary;
  };

  const toggleQuick = (id) => {
    projectsDictionary[id].isQuick = projectsDictionary[id].isQuick
      ? false
      : true;
    saveProjectsToLocalStorage();
  };

  const getProjectName = (id) => {
    return projectsDictionary[id].name;
  };

  function getMaxKey() {
    const keys = Object.keys(projectsDictionary);
    if (keys.length === 0) {
      return 0;
    }
    return Math.max(...keys) + 1;
  }

  function saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projectsDictionary));
  }

  return {
    loadProjectsFromLocalStorage,
    createProject,
    updateProject,
    getProject,
    deleteProject,
    getAllProjects,
    toggleQuick,
    getProjectName,
  };
})();

export { projectsController };
