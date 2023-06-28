import { tasksController } from "./tasksController";

const projectsController = (() => {
  let totalProjects = 0;
  let projectsDictionary = {};

  const loadProjectsFromLocalStorage = () => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      projectsDictionary = JSON.parse(storedProjects);
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
    projectsDictionary[id].quick = projectsDictionary[id].quick ? false : true;
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
