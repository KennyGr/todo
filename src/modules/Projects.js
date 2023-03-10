export const Project = (() => {
    const projectArray = [{name: "Work", taskArray: [{title: "Do Work", description: "Gotta get that money", dueDate: new Date(), priority: "high"}, {title: "Sleep", description: "ZZZzzzz", dueDate: new Date(), priority: "highest"}]}, {name: "School", taskArray: [{title: "Do Homework", description: "get you smart up", dueDate: new Date(), priority: "low af"}, {title: "Baseball Practice", description: "hittin' bombs", dueDate: new Date(), priority: "medium"}]}];

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