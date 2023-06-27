const projectsController = (() => {
  let totalProjects = 0;
  let projectsDictionary = {};

  const setUp = () => {
    let project = {
      name: "Project 1",
      description: "",
      quick: true,
    };
    projectsDictionary[totalProjects] = project;
    totalProjects = 1;
  };

  const createProject = (project) => {
    const projectId = totalProjects;
    projectsDictionary[totalProjects] = project;
    totalProjects++;

    return projectId;
  };

  const updateProject = (id, project) => {
    projectsDictionary[id] = project;
  };

  const getProject = (id) => {
    return projectsDictionary[id];
  };

  const deleteProject = (id) => {
    delete projectsDictionary[id];
  };

  const getAllProjects = () => {
    return projectsDictionary;
  };

  const toggleQuick = (id) => {
    projectsDictionary[id].quick = projectsDictionary[id].quick ? false : true;
  };

  return {
    setUp,
    createProject,
    updateProject,
    getProject,
    deleteProject,
    getAllProjects,
    toggleQuick,
  };
})();

export { projectsController };
