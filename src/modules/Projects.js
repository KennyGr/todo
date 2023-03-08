export const Project = (() => {
    const projectArray = [{name: "Work", taskArray: ["Do Work", "Sleep"]}, {name: "School", taskArray:["Do Homework", "Baseball Practice"]}];

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