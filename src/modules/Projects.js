var moment = require('moment');

export const Project = (() => {
    const projectArray = [{name: "Work", taskArray: [{title: "Do Work", description: "Gotta get that money", dueDate: "Tomorrow", priority: "high", complete: false, completedOn: moment("3000-12-25")}, {title: "Sleep", description: "ZZZzzzz", dueDate: "Tomorrow", priority: "highest", complete: false, completedOn: moment("3000-12-25")}]}, {name: "School", taskArray: [{title: "Do Homework", description: "get you smart up", dueDate: "Tomorrow", priority: "low af", complete: false, completedOn: moment("3000-12-25")}, {title: "Baseball Practice", description: "hittin' bombs", dueDate: "Tomorrow", priority: "medium", complete: false, completedOn: moment("3000-12-25")}]}];

    const projectFactory = (name) => {
        let taskArray = [{title: "Get Started!", description: "Description goes here!", dueDate: "Tomorrow", priority: "high", complete: false, completedOn: moment("3000-12-25")}];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
    }

    return { projectFactory, createProject, projectArray }
})();