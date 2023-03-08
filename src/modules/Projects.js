export const Project = (() => {
    const projectArray = [{name: "Work", taskArray: ["eat", "sleep"]}, {name: "School"}];

    const projectFactory = (name) => {
        let taskArray = [];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
        console.log(projectArray)
    }

    return { projectFactory, createProject, projectArray }
})();